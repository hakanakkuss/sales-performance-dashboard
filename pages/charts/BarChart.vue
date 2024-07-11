<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useStore } from '~/stores/store'

const store = useStore();
const chart = ref(null);
const chartData = ref(null)

onMounted(async() => {
  await store.initializeChartsData();
  chartData.value = store.getChartData('salesTargets');
  initializeChart()
})

const initializeChart = () => {
  if(chart.value && chartData.value){
    const chartInstance = echarts.init(chart.value, 'dark')

    const chartData = store.getChartData('salesTargets');
    const option = {
      title: {
        text: 'Sales Targets',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Target', 'Actual']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: chartData.xAxis,
      yAxis: chartData.yAxis,
      series: chartData.series
    };
    chartInstance.setOption(option)
  }
}
</script>

<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

