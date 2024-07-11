<script setup lang="ts">
import Navigation from "~/pages/Navigation.vue";
import ConfirmationModal from "./components/DeleteModal.vue";
import { ref, onBeforeMount } from 'vue';


//-----const chartData : ****null, {}, boolean**** = ref() böyle kullanabilirsin

//-----await kullanılırsa akış durur blocking olur
//-----then kullanırsan non blocking

//------datalara gelene kadar loader görünsün
//------lifecycles kullan


const chartData: any = ref(null);
const salesTargets = ref([]);
const showModal = ref(false);
const itemToDelete = ref(null);

onBeforeMount( () => {
  useFetch('/api/mockDataV2').then(({data,error}) => {
    if(error.value){
      console.log("error", error.value);
    }else {
    chartData.value = data.value
      salesTargets.value = data.value.salesTargets;
    }
  }).catch(error => {
    console.log('fetch error', error)
  })
});



const columnsMonthlySales = ref([
  { key: 'name', label: 'Name' },
  { key: 'month', label: 'Month' },
  { key: 'sales', label: 'Sales' }
]);

const columnsTopSellingProducts = ref([
  { key: 'product', label: 'Product' },
  { key: 'unitsSold', label: 'UnitSolds', sortable: true }
]);

const columnsSalesTargets = ref([
  { key: 'month', label: 'Month' },
  { key: 'target', label: 'Target', sortable: true },
  { key: 'actual', label: 'Actual', sortable: true },
  { key: 'actions', label: 'Actions' }
]);


const removeItem = () => {
  salesTargets.value = salesTargets.value.filter(item => item.id !== itemToDelete.value);
  closeModal();
};

const confirmDelete = (itemId) => {
  itemToDelete.value = itemId;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  itemToDelete.value = null;
};


</script>

<template>
  <Navigation />
  <div class="flex flex-col space-y-10 mt-20 ml-72 mr-72 justify-center h-screen min-w-screen">
    <h1 class="text-white text-2xl">Monthly Sales</h1>
    <UTable v-if="chartData" class="text-white mt-20" :columns="columnsMonthlySales" :rows="chartData.monthlySales" />
    <p v-else class="text-white">Loading...</p>
  </div>

  <div class="flex flex-col space-y-10 mt-20 ml-72 mr-72 justify-center h-screen min-w-screen">
    <h1 class="text-white text-2xl">Top Selling Products</h1>
    <UTable v-if="chartData" class="text-white mt-20" :columns="columnsTopSellingProducts" :rows="chartData.topSellingProducts"> </UTable>
  </div>

  <div class="flex flex-col space-y-10 mt-20 ml-72 mr-72 justify-center h-screen min-w-screen">
    <h1 class="text-white text-2xl">Sales Targets</h1>
    <UTable class="text-white mt-20" :columns="columnsSalesTargets" :rows="salesTargets" v-model:sort="sort" sort-mode="manual">
      <template #name-data="{ row }">
        <span class="bg-white">{{ row.month }}</span>
      </template>
      <template #actions-data="{ row }">
        <button @click="confirmDelete(row.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M16.5 4.478v.227a49 49 0 0 1 3.878.512a.75.75 0 1 1-.256 1.478l-.209-.035l-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A49 49 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a53 53 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951m-6.136-1.452a51 51 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a50 50 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452m-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </template>
    </UTable>
  </div>

  <!-- Modal Bileşeni -->
  <ConfirmationModal
      v-if="showModal"
      :show="showModal"
      :onConfirm="removeItem"
      :onCancel="closeModal"
  />
</template>
