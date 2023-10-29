export default defineNuxtConfig({

    modules: [
        '@unocss/nuxt',
        '@nuxt/image',
    ],

    image: {
        provider: 'cloudflare',
        cloudflare: {
            baseURL: 'https://media.cubesites.com'
        }
    },

})
