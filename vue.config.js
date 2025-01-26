const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'], // Инъекция Buffer глобально:cite[5]:cite[10]
      }),
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js'
      },
      fallback: {
        buffer: require.resolve('buffer/'), // Указание fallback для модуля:cite[4]
      }
    },
  },
  chainWebpack(config) {
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: tag => /^inkscape:|^sodipodi:/.test(tag)
        }
      }))
  }
})