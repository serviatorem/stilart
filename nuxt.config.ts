// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-swiper',
    '@nuxtjs/google-fonts',
    'nuxt-gtag'
  ],
  components: {
    pathPrefix: false
  },
  vue: {
    defineModel: true
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_usage.scss" as *;'
        }
      }
    }
  },
  css: ['assets/css/reset.scss', 'assets/css/_globals.scss'],
  googleFonts: {
    families: {
      Lunasima: true,
      Cormorant: true,
      Brela: true,
      'Libre Baskerville': true,
      Butler: true
    },
    subsets: 'cyrillic'
  },
  app: {
    head: {
      title: 'StilArt',
      description: ''
    }
  }
})
