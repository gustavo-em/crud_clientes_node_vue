const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '/../c_front'),

    transpileDependencies: [
      'vuetify'
    ]
}
