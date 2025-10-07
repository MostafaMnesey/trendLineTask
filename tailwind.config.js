import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react\\class-list.json",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#BE968E",
        "black/500": "#020202 ",
        "gray/200": "#8A8A8A",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
   
    },
  },
  plugins: [flowbiteReact],
};
