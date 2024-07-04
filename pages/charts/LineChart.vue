<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);

const { data } = await useFetch('/api/mockData')

const salesPerformanceByPeriodData = ref([])
const salesPeriod = ref([])
const datePeriod = ref([])

onMounted(() => {
  salesPerformanceByPeriodData.value = data.value.salesPerformanceByPeriod.daily
  salesPerformanceByPeriodData.value.forEach(q => {
    salesPeriod.value = q.sales
    datePeriod.value = q.date
  }
  )
  const chartInstance = echarts.init(chart.value, 'dark');
  const option = {
    title: {
      text: 'Haftalık Değerlendirme'
    },
    tooltip: {},
    xAxis: {
      data: [datePeriod.value]
    },
    yAxis: {},
    series: [{
      name: 'Weekly',
      type: 'line',
      data: [salesPeriod.value]
    }]
  };
  chartInstance.setOption(option);
});
</script>

<template>
  <div ref="chart" style="width: 1600px; height: 400px;"></div>
</template>

