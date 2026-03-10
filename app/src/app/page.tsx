import Link from "next/link";
import cartoonConfig from "@/cartoonConfig";

const cartoons = Object.keys(cartoonConfig) as Array<
  keyof typeof cartoonConfig
>;

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-5 gap-5 lg:flex-row lg:p-0 lg:gap-0">
      <div className="lg:absolute lg:top-1/6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10 relative">
        <div className="relative pt-5 pb-3 lg:p-0">
          <h1
            className="text-5xl lg:text-6xl text-rose-500 text-center font-luckiest mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Toon Guesser
          </h1>
          <p
            className="text-xl text-white text-center font-luckiest"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Every day, a brand-new toon arrives for you to guess!
          </p>
        </div>
      </div>

      {cartoons.map((cartoon) => (
        <Link
          key={cartoon}
          href={`/${cartoon}`}
          className={`${cartoonConfig[cartoon].font} ${cartoonConfig[cartoon].border} 
          border-4 rounded-xl flex-1 flex items-center justify-center relative 
          overflow-hidden group lg:rounded-none lg:border-0 lg:w-auto lg:mt-0`}
        >
          {/* Background con zoom en hover */}
          <div
            className={`absolute inset-0 ${cartoonConfig[cartoon].backgroundImage} 
              bg-cover bg-center transition-transform duration-500 ease-out
              group-hover:scale-110`}
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />

          <span
            className={`${cartoonConfig[cartoon].text} ${cartoonConfig[cartoon].textStyles.xxl} font-bold relative z-10`}
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            {cartoonConfig[cartoon].title}
          </span>
        </Link>
      ))}
    </div>
  );
}
