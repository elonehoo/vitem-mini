<script setup lang="ts">

</script>

<template>
  <div>
    <div class="text-4xl">
      <span class="iconify inline-block" data-icon="carbon:carbon-for-ibm-product" />
    </div>

    <p>Vitem Mini</p>

    <p>
      <em class="opacity-75 text-sm">
        Opinionated Vue Vite Starter Template
      </em>
    </p>

    <div class="py-4"></div>

    <input 
      placeholder="What's your name?"
      class="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
      autoComplete="false"
      type="text" 
    />

    <div>
      <button class="m-3 text-sm px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50">
        Go
      </button>
    </div>
  </div>

</template>
