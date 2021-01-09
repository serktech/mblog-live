
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'M&M Wealth Management'|| process.env.npm_package_name ,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,900&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/bulma'
  ],

  styleResources: {
    scss: [
      // '~assets/_colors.scss',
      // '~assets/screen.css',
      // '~assets/css/main.css',
      '~assets/scss/styles.scss'
      ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
