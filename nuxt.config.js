export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'saeS4-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/pages/style.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // If not auto imported, import the component manually and add it in "components" attribute -> component: {...},
  // For more info : https://nuxtjs.org/docs/directory-structure/components/
  components: {
    dirs: [ // Put here dirs of components to auto-import them
      "~/components/",
      "~/components/Icons/",
      "~/components/Naviguation/",
      "~/components/Article/",
      "~/components/Utils",
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
