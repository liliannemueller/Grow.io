module.exports = function override(config, env) {

    
  config.module.rules.push({
    test: /\.csv$/,
    use: ['csv-loader'],
  });

  return config;
};
