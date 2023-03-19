import transformerDirective from '@unocss/transformer-directives'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({

    modules: [
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/device',
        '@nuxt/image-edge',
        '@nuxtjs/web-vitals'
    ],

 
    unocss: {
        preflight: true,
        wind: true,
        icons: true,
        transformers: [
            transformerDirective(),
        ],
        shortcuts: [],
        rules: [],

        safelist: [
            'bg-black','bg-blue-300','bg-red-300','bg-green-300','bg-gray-300','bg-orange-300', 'bg-white', 'text-black',
            'text-blue-300','text-red-300','text-green-300','text-gray-300','text-orange-300', 'text-white'
        ]
    },

    build: {
        transpile: [
            "@headlessui/vue"
        ]
    },

    css: [
        resolve('./assets/scss/app.scss')
    ],

    
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE
        }
    }
})
