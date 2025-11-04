/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn"],
  singleQuote: false,
  tabWidth: 2,
  semi: true,
};

export default config;
