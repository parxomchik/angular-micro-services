const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    "news-market":
      "https://angular-news-micro-services-market.vercel.app/remoteEntry.js",
    "news-symbol":
      "https://angular-news-micro-services-symbol.vercel.app/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
