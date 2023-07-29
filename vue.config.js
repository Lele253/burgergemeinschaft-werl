const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        https: {
            key: require('fs').readFileSync('./leandro-graf_de.key'),
            cert: require('fs').readFileSync('./leandro-graf_de.crt'),
        },
    },
    /*publicPath: process.env.NODE_ENV === 'production'
        ? '/bg-werl/'
        : '/',*/
    transpileDependencies: true,

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
})
