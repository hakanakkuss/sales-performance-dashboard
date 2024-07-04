<template>
  <div class="min-h-20 bg-[#0F172A] flex justify-center items-center">
      <ul class="text-white flex space-x-16 text-xl mt-4">

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
<!--    <div class="flex justify-end">-->
<!--      <svg-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--          width="2em"-->
<!--          height="2em"-->
<!--          viewBox="0 0 24 24"-->
<!--      >-->
<!--        <path-->
<!--            fill="currentColor"-->
<!--            d="M12 11.385q-1.237 0-2.119-.882T9 8.385t.881-2.12T12 5.386t2.119.88t.881 2.12t-.881 2.118t-2.119.882m-7 7.23V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646z"-->
<!--        />-->
<!--      </svg>-->
<!--    </div>-->

  </div>

</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (page) => {
router.push(`${page}`)
}
</script>
