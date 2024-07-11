<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted, watch } from "vue";
import { useStore } from '~/stores/store';

const store = useStore();
const chart = ref(null);
const chartData = ref(null);


onMounted(async () => {
  await store.initializeChartsData();
  chartData.value = store.getChartData('userSalesPerformance');
  initializeChart();
});

const initializeChart = () => {
  if (chart.value && chartData.value) {
    const chartInstance = echarts.init(chart.value, 'dark');
    const option = {
      title: chartData.value.title,
      tooltip: chartData.value.tooltip,
      legend: chartData.value.legend,
      series: chartData.value.series,
    };
    chartInstance.setOption(option);
  }
};

</script>

<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </div>
</template>
