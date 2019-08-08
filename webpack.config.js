const path = require('path')

module.exports = {
  entry: {
    issaLib: './src/index.js',
    sayHello: './src/components/sayHello.js',
    sayGoodbye: './src/components/sayGoodbye.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  }
}
