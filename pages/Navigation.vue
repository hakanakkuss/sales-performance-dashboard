<template>
  <div class="min-h-20 bg-[#0F172A] flex justify-center items-center">
      <ul class="text-white flex space-x-16 text-xl mt-4">

        <li @click = "navigateTo('profile')" class="rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Profile
        </li>
        <li @click = "navigateTo('dashboard')" class="rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Dashboard
        </li>
        <li @click="navigateTo('sales')" class="rounded-lg hover:bg-white hover:text-[#0DA949] p-2 hover:rounded-lg hover:transition-transform duration-700 hover:cursor-pointer">
          Sales
        </li>
      </ul>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (page) => {
router.push(`${page}`)
}
</script>
