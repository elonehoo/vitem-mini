<script setup lang="ts">
let isDark: boolean = $ref(false)

function toggleDark() {
  isDark = document.documentElement.classList.toggle('dark')
}

</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button class="icon-btn" @click="toggleDark()">
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>
    <a href="https://github.com/elonehoo/vitem-mini" target="_blank" class="icon-btn i-carbon-logo-github">
    </a>
  </nav>
</template>
