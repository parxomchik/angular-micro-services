const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const environment = require('./src/environments/environment');

module.exports = withModuleFederationPlugin({

  remotes: {
    "news-market": environment.remoteNewsMarketUrl,
    "news-symbol": environment.remoteNewsSymbolUrl,
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
