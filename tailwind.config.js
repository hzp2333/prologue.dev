/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            lineHeight: "2.24rem",
            a: {
              textDecoration: "underline",
              "font-weight": "400",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            code: {
              color: theme("colors.pink.500"),
              paddingLeft: "4px",
              paddingRight: "4px",
            },
          },
        },
        invert: {
          css: {

          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
