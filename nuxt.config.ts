// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "nuxt-swiper",
    "@vueuse/nuxt"
  ],
  googleFonts: {
    families: {
      'Raleway': true,
      'Nunito': true
    }
  },
  supabase: {
    redirect: false
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  }
})