<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

const chart = ref(null);
const userSales = ref([]);
const userSalesData = ref([]);

const { data } = await useFetch('/api/mockData');



onMounted(() => {
  const chartInstance = echarts.init(chart.value, 'dark');
  if (data.value) {
    userSales.value = data.value.userSalesPerformance;

    userSalesData.value = userSales.value.map(item => ({
      name: item.user,
      value: item.sales
    }));
  }

  const option = {
    title: {
      text: 'User Sales Performance',
      subtext: 'Mock Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: '50%',
        data: userSalesData.value,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  chartInstance.setOption(option);
});
</script>

<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </div>
</template>
