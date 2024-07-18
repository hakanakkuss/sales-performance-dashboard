// nuxt.config.js

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['@/assets/css/tailwind.css'],

  ssr:false,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  layout: 'profile',
  modules: ["@nuxt/ui", '@pinia/nuxt', "nuxt-echarts"],
  echarts: {
    charts: ['BarChart', 'LineChart', 'PieChart','GaugeChart','RadarChart'],
    renderer: ['svg', 'canvas'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent','LegendComponent'],
    features: ['LabelLayout', 'UniversalTransition']
  }
})
