<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import { useStore } from '~/stores/store'

const store = useStore();
const chart = ref(null);

onMounted(() => {

  const chartInstance = echarts.init(chart.value, 'dark');
  store.initializeUserSalesPerformanceChartsData();

  const chartData = store.getChartData('userSalesPerformance');

  const option = {
    title: chartData.title,
    tooltip: chartData.tooltip,
    legend: chartData.legend,
    series: chartData.series
  }

  chartInstance.setOption(option);
});
</script>

<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </div>
</template>
