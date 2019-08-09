const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    sayHello: './src/components/sayHello.js',
    sayGoodbye: './src/components/sayGoodbye.js'
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
