export const dynamic = "force-static";

import ToonSelector from "@/shared/components/molecules/ToonSelector";
import PixelableImage from "@/shared/components/organisms/PixelableImage";
import Image from "next/image";

async function getToons() {
  const res = await fetch("http://localhost:3000/api/simpsons");
  const data = await res.json();
  return data;
}

export default async function Simpsons() {
  const toons = await getToons();
  return (
    <div className="relative min-h-screen w-screen flex justify-center">
      <Image
        src="/simpsons_bg.jpg"
        alt="Simpsons Background"
        fill
        className="object-cover -z-100 brightness-50"
        priority
      />
      <div className="w-5/10">
        <div className="w-full flex justify-center mt-10">
          <Image
            src="/simpsons_logo.png"
            alt="Simpsons Logo"
            width={300}
            height={0}
          />
        </div>

        <div className="w-full flex justify-center mt-10">
          <div>
            <div className="bg-white/70 border-4 border-simpsons p-4 rounded-lg">
              <PixelableImage
                src="/simpsons_toons/42.webp"
                width={300}
                height={300}
                dificulty={9}
                enableSaturation={true}
              />
            </div>
            <ToonSelector toons={toons} />
          </div>
        </div>
      </div>
    </div>
  );
}
