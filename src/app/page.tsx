import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link
        className="bg-amber-400 p-4 text-white font-semibold cursor-pointer rounded-lg hover:mb-2 transition-all"
        href="/simpsons"
      >
        Ir a los Simpsons
      </Link>
    </div>
  );
}
