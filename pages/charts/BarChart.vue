<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);
const { data } = await useFetch('/api/mockData')


onMounted(() => {
  const chartInstance = echarts.init(chart.value, 'dark')

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
    xAxis: [
      {
        type: 'category',
        data: data.value.salesTargets.map(item => item.month)
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Target',
        type: 'bar',
        data: data.value.salesTargets.map(item => item.target),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'Actual',
        type: 'bar',
        data: data.value.salesTargets.map(item => item.actual),
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  }

  chartInstance.setOption(option)
})
</script>

<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

<style scoped>
</style>
