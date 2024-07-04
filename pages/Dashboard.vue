<script setup lang="ts">
import Navigation from "~/pages/Navigation.vue";
import PieChart from "~/pages/charts/PieChart.vue";
import LineChart from "~/pages/charts/LineChart.vue";
import BarChart from "~/pages/charts/BarChart.vue";


</script>

<template>
  <div>
    <Navigation />
  </div>
  <div class="text-white mt-40 justify-center items-center">
    <div class="flex max-w-7xl ml-52">
      <p class="max-w-2xl">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      <BarChart />
    </div>
    <div class="flex mt-60 ml-52">
      <LineChart />

      <p class="max-w-2xl ml-20">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
    </div>

<!--    <PieChart />-->
  </div>
</template>

