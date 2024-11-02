const theme = {
  breaks: {
    minimobile: "max-width: 340px",
    mobile: "max-width: 767px",
    tablet: "768px <= width <= 1024px",
    desktop: "min-width: 1024px",
    xs: "min-width: 0px",
    sm: "min-width: 576px",
    md: "min-width: 768px",
    lg: "min-width: 992px",
    xl: "min-width: 1200px",
    xxl: "min-width: 1400px",
  },
  colors: {
    backgrounds: {
      primary: "#44215d",
      secondary: "#77b042",
      tertiary: "#1c1c1c",
      quaternary: "#ffffff",
      quinary: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      tertiary: "#1c1c1c",
      quaternary: "#b00000",
      quinary: "#77b042",
    },
    border: {
      colors: {
        primary: "#77b042",
        secundary: "#000000",
      },
    },
  },
  sizes: {
    font: {
      primary: "1rem",
      secundary: "1.5rem",
      terciary: "2rem",
    },
    border: {
      primary: "2px",
      secundary: "1px",
      radius: {
        primary: "9px",
        secudary: "36px",
        teriary: "25px",
      },
    },
  },
};

export default theme;
