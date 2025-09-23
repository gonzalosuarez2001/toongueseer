import PixelableImage from "@/shared/components/organisms/PixelableImage";
import ToonPicker from "@/shared/components/organisms/ToonPicker";
import Image from "next/image";

async function getToons() {
  const res = await fetch("http://localhost:3000/api/simpsons");
  const data = await res.json();
  return data;
}

async function getDailyToon() {
  const res = await fetch("http://localhost:3000/api/simpsons/daily");
  const data = await res.json();
  return data;
}

export default async function Simpsons() {
  const toons = await getToons();
  const dailyToon = await getDailyToon();
  return (
    <div className="relative min-h-screen w-screen flex justify-center bg-toon-simpsons">
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
            <div className="bg-white/80 border-4 border-simpsons p-4 rounded-lg">
              <PixelableImage
                src={`/simpsons_toons/${dailyToon}.webp`}
                width={300}
                height={300}
                dificulty={5}
                enableSaturation={true}
                enableRotation={true}
              />
            </div>
            <ToonPicker toons={toons} cartoon="simpsons"/>

            <div className="bg-white/80 border-4 border-simpsons rounded-lg h-20 my-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
