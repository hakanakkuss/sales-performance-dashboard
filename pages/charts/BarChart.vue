<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useMockDataStore } from '~/stores/mockData'

const mockDataStore = useMockDataStore()
const { data } = await useAsyncData('mockData', async () => {
  mockDataStore.fetchMockData()

  return {
    monthlySales: mockDataStore.monthlySales,
    topSellingProducts: mockDataStore.topSellingProducts,
    salesTargets: mockDataStore.salesTargets,
    salesPerformanceByPeriod: mockDataStore.salesPerformanceByPeriod,
    userSalesPerformance: mockDataStore.userSalesPerformance,
  }
})
const chart = ref(null);

onMounted(() => {
  const chartInstance = echarts.init(chart.value, 'dark')

  const option = {
    title: {
      text: 'Sales Targets vs Actual Sales',
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

<style scoped>
</style>
