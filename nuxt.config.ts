export default defineNuxtConfig({

    modules: [
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/device',
        '@nuxt/image',
        '@nuxtjs/web-vitals'
    ],


    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE
        }
    }
})
