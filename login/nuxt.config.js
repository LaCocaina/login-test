module.exports = {
  head: {
    title: 'Тестовое задание',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: "#19d27c" },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],
  buildModules: [
    ['@nuxtjs/vuetify'],
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#19d27c",
          accent: "#82ffb4",
        }
      }
    }
  }
}

