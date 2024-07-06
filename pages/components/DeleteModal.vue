<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-menu-text p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-sans mb-4">Are you sure delete this user?</h2>
      <div class="flex justify-center space-x-4">
        <button @click="onCancel" class="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
        <button @click="onConfirm" class="bg-red-300 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  onConfirm: Function,
  onCancel: Function
});
</script>
