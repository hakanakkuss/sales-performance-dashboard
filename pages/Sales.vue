<template>
  <div>
    <Navigation />
  </div>
  <div class="flex mt-20 justify-center" v-for="data in mockItems" :key="data.id">
    <div class="ml-20">
      <h1 class="text-white text-4xl">Monthly Sales</h1>
      <ul>
        <div class="text-white mt-8" >
          <div v-for="monthDatas in data.monthlySales">
            {{ monthDatas.month }} - {{ monthDatas.sales }}
          </div>
        </div>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>


    <div class="ml-20">
      <h1 class="text-white text-4xl">Top Selling Products</h1>
      <ul>
        <div class="text-white mt-8" >
          <div v-for="product in data.topSellingProducts">
            {{ product.product }} - {{ product.unitsSold }}
          </div>
        </div>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>


    <div class="ml-20">
      <h1 class="text-white text-4xl">Sales Targets</h1>
      <ul>
        <div class="text-white mt-8" >
          <div v-for="target in data.salesTargets">
            {{ target.month }} | {{ target.target }} - {{ target.actual }}
          </div>
        </div>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>

    <div class="ml-20">
      <h1 class="text-white text-4xl">User Sales Performance</h1>
      <ul>
        <div class="text-white mt-8" >
          <div v-for="userSale in data.userSalesPerformance">
            {{ userSale.user }} => {{ userSale.sales }}
          </div>
        </div>
      </ul>
      <button @click="addItem">Add Item</button>
    </div>



  </div>

</template>

<script setup>
import { computed } from 'vue'
import { useMockDataStore } from '~/stores/mockData'
import Navigation from "~/pages/Navigation.vue";

const store = useMockDataStore()

const mockItems = computed(() => store.getAllItems)

const addItem = () => {
  const newItem = { id: store.mockItems.length + 1, name: `Mock Item ${store.mockItems.length + 1}`, value: Math.random() * 100 }
  store.addItem(newItem)
}
</script>
