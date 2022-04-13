import tailwindTypography from '@tailwindcss/typography'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    base: '/data-catalogue/',
    middleware: 'data-catalogue-dynamic-routes'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'data-catalogue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-multiselect'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text', 'doi'],
    nestedProperties: ['contact.name', 'contact.orcid']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-multiselect']
  },

  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      theme: {
        extend: {
          typography: {
            DEFAULT: { // edit the prose class
              css: {
                'font-weight': '100',
                p: {
                  'font-weight': '100',
                  color: '#2b32a4'
                },
                a: {
                  'font-weight': '300',
                  '&:hover': {
                    color: '#a0a0a0'
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faHouse', 'faAngleRight'],
      brands: true
    }
  }
}
