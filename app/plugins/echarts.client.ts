import { defineNuxtPlugin } from '#app'
import VueECharts from 'vue-echarts'
import { use } from 'echarts/core'

// Renderer
import { CanvasRenderer } from 'echarts/renderers'

// Chart types
import {
  BarChart,
  LineChart,
  PieChart
} from 'echarts/charts'

// Components (INI WAJIB kalau kamu pakai di option)
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'

// Register ke ECharts
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  TitleComponent,     // << penting
  TooltipComponent,
  LegendComponent,
  GridComponent
])

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('v-chart', VueECharts)
})
