<script setup lang="ts">
import Navigation from "~/pages/Navigation.vue";
import { ref } from 'vue'

const { data } = await useFetch('/api/mockData')

const columnsMonthlySales = ref([
  { title: 'Name', key: 'name' },
  { title: 'Month', key: 'month' },
  { title: 'Sales', key: 'sales' }
])

const columnsTopSellingProducts = ref([
  { title: 'Product', key: 'product' },
  { title: 'UnitsSold', key: 'unitsSold', sortable: true },
])

const columnsSalesTargets = ref([
  { id:'id', key: 'id' },
  { title: 'Month', key: 'month' },
  { title: 'Target', key: 'target', sortable: true },
  { title: 'Actual', key: 'actual', sortable: true },

])

</script>

<template>
  <Navigation />
  <div class="flex flex-col space-y-10 mt-20 ml-72 mr-72 justify-center h-screen min-w-screen">
    <h1 class="text-white text-2xl">Monthly Sales</h1>
    <UTable class="text-white mt-20" :columns="columnsMonthlySales" :rows="data.monthlySales" />
  </div>

  <div class="flex flex-col space-y-10 mt-20 ml-72 mr-72 justify-center h-screen min-w-screen">
    <h1 class="text-white text-2xl">Top Selling Products</h1>
    <UTable class="text-white mt-20" :columns="columnsTopSellingProducts" :rows="data.topSellingProducts" />
  </div>

  <div class="flex flex-col space-y-10 mt-20 ml-72 mr-72 justify-center h-screen min-w-screen">
    <h1 class="text-white text-2xl">Sales Targets</h1>
    <UTable class="text-white mt-20" :columns="columnsSalesTargets" :rows="data.salesTargets" />
  </div>
</template>
