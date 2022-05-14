import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['@fawmi/vue-google-maps']
      },
    
    publicRuntimeConfig: {
        googleKey: process.env.GOOGLE_KEY
    }
})
