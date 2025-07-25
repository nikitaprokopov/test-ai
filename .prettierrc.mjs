/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn"],
  printWidth: 120,

  overrides: [
    {
      files: "*.astro",

      options: {
        parser: "astro",
      },
    },
  ],
};
