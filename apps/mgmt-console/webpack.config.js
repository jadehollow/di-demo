const {merge} = require('webpack-merge');
const {withModuleFederation} = require('@nrwl/angular/module-federation');
const mfConfig = require('./module-federation.config');

module.exports = async (webpackConfig, {options, context}) => {
  const federatedModules = await withModuleFederation({
    ...mfConfig,
    // shared: (libraryName, sharedConfig) => sharedConfig
    // shared: (libraryName, sharedConfig) => false
    // shared: (libraryName, sharedConfig) => {
    //   if (["@angular/core", "@angular/common", "@angular/router"].includes(libraryName)) {
    //     return sharedConfig;
    //   }
    //   return false;
    // }
  });
  return merge(federatedModules(webpackConfig, context));
};
