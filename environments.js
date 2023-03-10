const Config = require("./env.json");

const bundleId = Config.BRAND;
let env;

if (bundleId.includes("Planet")) env = require("./env.DailyPlanet.json");
else if (bundleId.includes("Bugle")) env = require("./env.DailyBugle.json");

Object.assign(global, env);
