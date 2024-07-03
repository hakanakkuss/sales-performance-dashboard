<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </div>

</template>

<script setup>

import * as echarts from "echarts";
import {ref, onMounted} from "vue";

const chart = ref(null);


onMounted(()=> {
  const chartInstance = echarts.init(chart.value, 'dark');
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
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
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
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
})



</script>
