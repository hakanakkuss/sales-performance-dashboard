<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useStore } from '~/stores/store';

const store = useStore();
const chart = ref(null);

onMounted(() => {
  store.initializeSalesPerformanceByPeriodChartsData();
  const chartData = store.getChartData('userSalesPerformanceByPeriod');

    const chartInstance = echarts.init(chart.value, 'dark');
    chartInstance.setOption(chartData);
});
</script>

<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>
