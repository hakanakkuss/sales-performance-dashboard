<script setup lang="ts">
import Navigation from "~/pages/Navigation.vue";
import PieChart from "~/pages/charts/PieChart.vue";
import LineChart from "~/pages/charts/LineChart.vue";
import BarChart from "~/pages/charts/BarChart.vue";
import StackedLineChart from "~/pages/charts/StackedLineChart.vue";

</script>

<template>
  <div>
    <Navigation />
  </div>
  <div class="flex justify-center mx-auto py-6 px-4">
    <div class="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2">
      <div class=" p-6 rounded-lg ">
        <StackedLineChart />
      </div>
      <div class=" p-6 rounded-lg">
        <BarChart />
      </div>
      <div class=" p-6 rounded-lg mt-32">
        <PieChart />
      </div>
      <div class="p-6 rounded-lg shadow-md">
        <LineChart />
      </div>
    </div>
  </div>



</template>

