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
    title: {
      text: 'Haftalık Değerlendirme'
    },
    tooltip: {},
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
      name: 'Example',
      type: 'line',
      data: [150, 230, 224, 218, 135, 147, 260]
    }]
  };
  chartInstance.setOption(option);
});
</script>

<style scoped>
</style>
