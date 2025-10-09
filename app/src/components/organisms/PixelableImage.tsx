"use client";
import { useToon } from "@/hooks/ToonContext";
import { useRef, useEffect, useState } from "react";

export default function PixelableImage({
  src,
  width,
  height,
  pixelDificulty,
  saturationDificulty,
  enableRotation = true,
}: {
  src: string;
  width: number;
  height: number;
  pixelDificulty: number;
  saturationDificulty: number;
  enableRotation: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { rotationAngle, pixelationLevels, saturationLevels } = useToon();

  const pixelation = pixelationLevels[pixelDificulty];
  const saturation = saturationLevels[saturationDificulty];

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = width;
      canvas.height = height;

      const reducedWidth = Math.ceil(width / pixelation);
      const reducedHeight = Math.ceil(height / pixelation);

      // canvas temporal
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = reducedWidth;
      tempCanvas.height = reducedHeight;
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;

      // Dibujar la imagen encima, escalada al canvas reducido
      tempCtx.drawImage(img, 0, 0, reducedWidth, reducedHeight);

      // Convertir a escala de grises
      const imageData = tempCtx.getImageData(0, 0, reducedWidth, reducedHeight);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        // promedio de RGB
        const gray =
          0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];

        data[i] = data[i] * (1 - saturation) + gray * saturation; // R
        data[i + 1] = data[i + 1] * (1 - saturation) + gray * saturation; // G
        data[i + 2] = data[i + 2] * (1 - saturation) + gray * saturation; // B
      }
      tempCtx.putImageData(imageData, 0, 0);

      // Seleccionar una rotación aleatoria
      const angleDeg = enableRotation ? rotationAngle : 0;

      const angleRad = (angleDeg * Math.PI) / 180;

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, width, height);

      // Guardar estado
      ctx.save();

      // Mover el origen al centro
      ctx.translate(width / 2, height / 2);
      ctx.rotate(angleRad);

      // Dibujar teniendo en cuenta la rotación
      if (angleDeg === 90 || angleDeg === 270) {
        ctx.drawImage(tempCanvas, -height / 2, -width / 2, height, width);
      } else {
        ctx.drawImage(tempCanvas, -width / 2, -height / 2, width, height);
      }

      // Restaurar
      ctx.restore();
    };
  }, [src, width, height, pixelDificulty, saturationDificulty, enableRotation]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width, height }} />
    </div>
  );
}
