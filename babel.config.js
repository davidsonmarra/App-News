const { BRAND } = require("./env.json");
const getLocalModuleConfig = require("./utils/get-local-module-config");

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
            "@routes": "./src/routes",
            "@pages": "./src/pages",
            ...getLocalModuleConfig(),
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
