module.exports = {
    /**
     * Здесь должен быть описан ваш конфиг для сборки.
     * Для ссылки на текущую папку используйте встроенную переменную __dirname
     */
};

module.exports = {
    entry: __dirname + '/modules/app.js',
    output: {
      path: __dirname,
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        }]
    }
  };
