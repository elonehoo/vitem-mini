<script setup lang="ts">
import CarbonAsleep from '~icons/carbon/asleep'
import CarbonAwake from '~icons/carbon/awake'
import CarbonLogoGithub from '~icons/carbon/logo-github'

let isDark:boolean = $ref(false)

function toggleDark() {
  isDark = document.documentElement.classList.toggle('dark')
}

</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button @click="toggleDark()" class="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
      <CarbonAsleep v-if="isDark" />
      <CarbonAwake v-else />
    </button>
    <a href="https://github.com/elonehoo/vitem-mini" target="_blank" class="text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out !outline-none hover:opacity-100 hover:text-teal-600">
      <CarbonLogoGithub />
    </a>
  </nav>
</template>
