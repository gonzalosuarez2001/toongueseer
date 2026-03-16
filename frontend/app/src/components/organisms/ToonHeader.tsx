import { useAppSelector } from "../../store/hooks";
import Image from "next/image";

export default function ToonHeader() {
  const { cartoon } = useAppSelector((state) => state.game);

  return (
    <div className="w-full flex justify-center mt-5">
      <Image
        src={`/${cartoon}_logo.png`}
        alt="Toon Logo"
        width={250}
        height={0}
      />
    </div>
  );
}
