"use client";
import { useRef, useEffect, useState } from "react";

const saturationLevels = [0.1,0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
const pixelationLevels = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const rotations = [90, 180, 270];

export default function PixelableImage({
  src,
  width,
  height,
  dificulty,
  enableSaturation = true,
}: {
  src: string;
  width: number;
  height: number;
  dificulty: number;
  enableSaturation?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pixelation = pixelationLevels[dificulty - 1];
  const saturation = saturationLevels[dificulty - 1];

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

      if (enableSaturation) {
        // Convertir a escala de grises
        const imageData = tempCtx.getImageData(
          0,
          0,
          reducedWidth,
          reducedHeight
        );
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
      }

      // Seleccionar una rotación aleatoria
      const angleDeg = rotations[Math.floor(Math.random() * rotations.length)];
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
  }, [src, width, height, dificulty]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width, height }} />
    </div>
  );
}
