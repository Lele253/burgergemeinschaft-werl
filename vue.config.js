const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {

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
