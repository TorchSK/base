export default defineNuxtConfig({

    modules: [
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/device',
        '@nuxt/image-edge',
        '@nuxtjs/web-vitals'
    ],


    build: {
        transpile: [
            "@headlessui/vue"
        ]
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE
        }
    }
})
