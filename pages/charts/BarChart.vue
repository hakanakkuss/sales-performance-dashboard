<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);

onMounted(() => {
  const chartInstance = echarts.init(chart.value, 'dark');
  const option = {

    tooltip: {},
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [{
      name: 'Example',
      type: 'bar',
      data: [5, 20, 36, 10, 10]
    }]
  };
  chartInstance.setOption(option);
});
</script>

<style scoped>
</style>
