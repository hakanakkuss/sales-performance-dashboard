<template>
  <Navigation />
  <div class="flex space-x-44 mt-20 justify-center h-screen">
    <div>
      <h1 class="text-white text-2xl">Monthly Sales</h1>
      <ul class="mt-8" v-if="data && data.monthlySales">
        <li class="text-white" v-for="item in data.monthlySales" :key="item.month">
          {{ item.month }}: {{ item.sales }}
        </li>
      </ul>
    </div>

    <div>
      <h1 class="text-white text-2xl">Top Selling Products</h1>
      <ul class="mt-8" v-if="data && data.topSellingProducts">
        <li class="text-white" v-for="item in data.topSellingProducts" :key="item.product">
          {{ item.product }}: {{ item.unitsSold }}
        </li>
      </ul>
    </div>

    <div>
      <h1 class="text-white text-2xl">Sales Targets</h1>
      <ul class="mt-8" v-if="data && data.salesTargets">
        <li class="text-white" v-for="item in data.salesTargets" :key="item.month">
          {{ item.month }} - Target: {{ item.target }}, Actual: {{ item.actual }}
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-white text-2xl">Daily Sales</h3>
      <ul class="mt-8" v-if="data && data.salesPerformanceByPeriod.daily.length">
        <li class="text-white" v-for="item in data.salesPerformanceByPeriod.daily" :key="item.date">
          {{ item.date }}: {{ item.sales }}
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-white text-2xl">Weekly Sales</h3>
      <ul class="mt-8" v-if="data && data.salesPerformanceByPeriod.weekly">
        <li class="text-white" v-for="item in data.salesPerformanceByPeriod.weekly" :key="item.week">
          {{ item.week }}: {{ item.sales }}
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-white text-2xl">Monthly Sales Performance</h3>
      <ul class="mt-8" v-if="data && data.salesPerformanceByPeriod.monthly">
        <li class="text-white" v-for="item in data.salesPerformanceByPeriod.monthly" :key="item.month">
          {{ item.month }}: {{ item.sales }}
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-white text-2xl">User Sales Performance</h3>
      <ul class="mt-8" v-if="data && data.userSalesPerformance">
        <li class="text-white" v-for="item in data.userSalesPerformance" :key="item.user">
          {{ item.user }}: {{ item.sales }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { useMockDataStore } from '~/stores/mockData'
import Navigation from "~/pages/Navigation.vue";

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




</script>
