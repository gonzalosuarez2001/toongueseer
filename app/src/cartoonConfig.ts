const cartoonConfig = {
  simpsons: {
    textStyles: {
      xl: "text-3xl",
      lg: "text-2xl",
      md: "text-xl",
      sm: "text-lg",
    },
    background: "bg-simpsons",
    backgroundImage: "bg-toon-simpsons",
    font: "font-simpsons",
    border: "border-simpsons",
    text: "text-simpsons",
    scroll: "scrollbar-simpsons",
    loading: "border-t-simpsons border-r-simpsons",
    pixelationLevels: [1, 20, 24, 28, 32, 36, 40, 44, 46, 50],
    saturationLevels: [0, 0.75, 0.8, 0.84, 0.88, 0.92, 0.96, 1],
  },
  pokemon: {
    textStyles: {
      xl: "text-3xl font-semibold",
      lg: "text-2xl",
      md: "text-xl",
      sm: "text-lg",
    },
    background: "bg-pokemon",
    backgroundImage: "bg-toon-pokemon",
    font: "font-pokemon",
    border: "border-pokemon",
    text: "text-pokemon",
    scroll: "scrollbar-pokemon",
    loading: "border-t-pokemon border-r-pokemon",
    pixelationLevels: [1, 15, 19, 22, 25, 28, 31, 34, 37, 40],
    saturationLevels: [0, 0.71, 0.75, 0.8, 0.84, 0.88, 0.92, 1],
  },
};

export default cartoonConfig;
