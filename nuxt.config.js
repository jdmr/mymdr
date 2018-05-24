module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MDR - Mobile Device Repair',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mobile Device Repair' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js' },
      { src: '/js/smoothscroll.js' },
      { src: '/js/scrollax.min.js' },
      { src: '/js/main.js' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#21c2f8' },

  css: [
    '@/assets/css/mdr.scss'
  ],

  plugins: [
    '~/plugins/vue-google-maps',
    '~/plugins/vue-carousel'
  ],

  /*
  ** Build configuration
  */
  build: {
    vendors: ['babel-polyfill', 'vue-carousel'],

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        /*
        ** Run ESLint on save
        */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }

    }
  }
}
