// nuxt.config.js
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/pinia'],
  layout: 'default'
})
