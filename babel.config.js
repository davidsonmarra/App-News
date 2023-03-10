const { BRAND } = require("./env.json");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          imageScale: ["@2x", "@3x"],
          imageTypes: [".png", ".gif", ".jpg", ".jpeg"],
          alias: {
            "@": "./src",
            "@assets": `./src/assets`,
            "@assetsBrand": `./src/assets/${BRAND}`,
            "@components": "./src/components",
            "@modules": "./modules",
          },
        },
      ],
      [
        "inline-dotenv",
        {
          path: ".env",
          unsafe: true,
        },
      ],
    ],
  };
};
