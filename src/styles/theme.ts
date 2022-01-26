import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#FE043C",
    secondary: "#C8161D",
    violet: {
      500: "#2148C0",
      900: "#2E266F",
    },
    gray: {
      600: "#707070",
    },
    bgColor: "#FFF5EC",
    chardon: "#ffedde",
    negative: "#E60000",
    warning: "#FFCd07",
    sucess: "#168821",
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4.5rem",
      "10xl": "12.5rem",
    },
    styles: {
      global: {
        body: {
          bg: "#FFF5EC",
        },
      },
    },
  },
});
