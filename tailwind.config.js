/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f8f8f8",
        gray: {
          "100": "#949391",
          "200": "#939393",
          "300": "#121315",
        },
        darkslategray: "#313131",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        calgarydemo: "CalgaryDemo",
        poppins: "Poppins",
        inter: "Inter",
      },
    },
    fontSize: {
      "11xl-6": "1.913rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
