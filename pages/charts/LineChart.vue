<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useStore } from "~/stores/store";

const chart = ref(null);
const store = useStore();
const chartData = ref(null);


onMounted(async () => {
  // await store.initializeByPeriodWeekly();
  chartData.value = store.getChartData('userSalesPerformanceByPeriod');
  // initializeChart()

});

const initializeChart = () => {
  if(chart.value && chartData.value){
    const chartInstance = echarts.init(chart.value, 'dark');
    const option = {
      title: chartData.title.text,
      xAxis: {
        data: chartData.xAxis.data,
      },
      yAxis: {},
      series: chartData.series,
    };
    chartInstance.setOption(option);
  }
}



</script>

<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

