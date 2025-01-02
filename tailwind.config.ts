import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "lighten-3": "#CCD3DB",
          "lighten-2": "#AAB6C2",
          "lighten-1": "#849CB4",
          DEFAULT: "#002349",
          "darken-1": "#001731",
          "darken-2": "#000C18",
        },
        accent: {
          "lighten-4": "#E7F3FE",
          "lighten-3": "#D7EBFE",
          "lighten-2": "#AFD8FC",
          "lighten-1": "#B3D8FA",
          DEFAULT: "#87C4FB",
          "darken-1": "#50AAFC",
        },
        neutral: {
          "lighten-2": "#F6F6F8",
          "lighten-1": "#F6F6F6",
          DEFAULT: "#E4E5EA",
          "darken-1": "#C6C6C6",
          "darken-2": "#9B9B9B",
          "darken-3": "#595959",
        },
        dark: {
          "lighten-3": "#CED0D2",
          "lighten-2": "#AEB1B3",
          "lighten-1": "#999999",
          DEFAULT: "#0C151C",
          "darken-1": "#080E13",
          "darken-2": "#040709",
        },
      },
    },
  },
  plugins: [],
};
export default config;
