// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev:false,
  modules: [
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-swiper',
    '@nuxtjs/google-fonts',
    'nuxt-mail',
    '@nuxtjs/yandex-metrika',
    'nuxt-gtag'
  ],
  runtimeConfig: {
    public: {
      mailUser: process.env.MAIL_USER
    }
  },
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
  mail: {
    message: {
      to: process.env.MAIL_TO
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    }
  },
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
