import Link from "next/link";
import cartoonConfig from "@/cartoonConfig";

const cartoons = Object.keys(cartoonConfig) as Array<
  keyof typeof cartoonConfig
>;

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row justify-center">
      <div className="lg:absolute lg:top-1/6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
        <h1
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-5"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Toon Guesser
        </h1>
        <p
          className="text-lg text-white text-center drop-shadow-2xl"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Every day, a brand-new toon arrives for you to guess!
        </p>
      </div>

      {cartoons.map((cartoon) => (
        <Link
          key={cartoon}
          href={`/${cartoon}`}
          className={`${cartoonConfig[cartoon].font} flex-1 flex items-center justify-center relative overflow-hidden group`}
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
