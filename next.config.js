const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// https://github.com/GoogleChrome/workbox/issues/1790

const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: !prod,
    runtimeCaching,
  },
});
