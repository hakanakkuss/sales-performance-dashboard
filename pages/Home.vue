<script setup lang="ts">
import { useRouter } from "vue-router";

const route = useRouter();

function getStarted(){
  console.log("click");
  route.push('/dashboard');
}
</script>

<template>
  <div class="min-h-screen">
    <div class="flex justify-center items-center">
      <div class="text-center mt-60">
        <h1 class="font-bold font-sans text-7xl">Build your landing in seconds</h1>
        <p class="font-extralight text-gray-350 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>

    </div>
    <div class="flex justify-center">
      <UButton @click="getStarted" class="rounded-2xl mt-20">Get Started</UButton>
    </div>
  </div>

</template>
