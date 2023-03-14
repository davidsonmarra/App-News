const { getDefaultConfig } = require("expo/metro-config");
const getLocalModuleConfig = require("./utils/get-local-module-config");
const path = require("path");

const modulesPaths = getLocalModuleConfig();

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    extraNodeModules: {
      ...modulesPaths,
    },
    nodeModulesPaths: [path.resolve(".", "node_modules")],
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };
  config.watchFolders = [...Object.values(modulesPaths)];

  return config;
})();
