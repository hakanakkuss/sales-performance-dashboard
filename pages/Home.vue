<script setup lang="ts">
import { useRouter } from "vue-router";

const route = useRouter();

function getStarted(){
  console.log("click");
  route.push('/dashboard');
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <UButton @click="getStarted">Get Started</UButton>
  </div>
</template>
