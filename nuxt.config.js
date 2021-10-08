import { title, description, keywords, url } from './content/meta'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'ca'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'keywords', name: 'keywords', content: keywords },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:locale', property: 'og:locale', content: 'ca' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: url + 'ogimage.png' },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: title },
      { hid: 'twitter:description', property: 'twitter:description', content: description },
      { hid: 'twitter:image', property: 'twitter:image', content: url + 'ogimage.png' },
      { hid: 'twitter:url', property: 'twitter:url', content: url }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
      { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/compromis.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './styles/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/locomotive.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Style resources
  styleResources: {
    scss: ['./styles/_variables.scss']
  }
}
