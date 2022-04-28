<script setup lang="ts">
import { reactive } from '@vue/reactivity';

const isDark = reactive({
  value: false,
})

function toggleDark() {
  isDark.value = document.documentElement.classList.toggle('dark')
  console.log(isDark.value)
}
</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button @click="toggleDark()" class="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
      <span v-if="isDark.value" class="iconify" data-icon="carbon:moon" data-inline="false"></span>
      <span v-else class="iconify" data-icon="carbon:sun" data-inline="false"></span>
    </button>
    <a href="https://github.com/elonehoo/vitem-mini" target="_blank" class="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
      <span class="iconify" data-icon="carbon:logo-github" data-inline="false"></span>
    </a>
  </nav>
</template>
