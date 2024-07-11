<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from 'vue'

const router = useRouter();

const items = [
 [{
    label: 'Exit',
    icon: 'i-heroicons-trash-20-solid',
    click: () => {
     console.log("sss")
      navigateTo('/')
   }
  }]
]

const navigateTo = (page) => {
  router.push(`${page}`)
}

</script>

<template>
  <div class="min-h-20 bg-[#0F172A] flex justify-center items-center">
      <ul class="text-white flex space-x-16 text-xl mt-4">
        <li @click = "navigateTo('home')" class="font-sans rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Home
        </li>

        <li @click = "navigateTo('profile')" class="font-sans rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Profile
        </li>
        <li @click = "navigateTo('dashboard')" class="font-lucida rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Dashboard
        </li>
        <li @click="navigateTo('sales')" class="rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Sales
        </li>
      </ul>
    <div class="flex justify-end ml-32 mt-4">
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UAvatar
            chip-color="green"
            chip-text=""
            chip-position="top-right"
            size="sm"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
        />
      </UDropdown>
    </div>
  </div>

<!--<UDivider-->
<!--    loading-->
<!--    :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid' }"-->
<!--    :progress="{ color: 'primary', animation: 'carousel' }"-->
<!--    class="w-full"-->

<!--/>-->
</template>



