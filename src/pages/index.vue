<script setup lang="ts">
import { useRouter } from 'vue-router'
import CarbonCarbonForIbmProduct from '~icons/carbon/carbon-for-ibm-product'

const name: string = $ref('')

const router = useRouter()

function go() {
  if (name.length > 0)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

</script>

<template>
  <div>
    <CarbonCarbonForIbmProduct class="text-4xl inline-block" />
    <p>Vitem Mini</p>

    <p>
      <em class="opacity-75 text-sm">
        Opinionated Vue Vite Starter Template
      </em>
    </p>

    <div class="py-4" />

    <input
      v-model="name"
      placeholder="What's your name?"
      class="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
      autoComplete="false"
      type="text"
      @keydown.enter="go()"
    >

    <div>
      <button :disabled="name.length <= 0" class="m-3 text-sm px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="go()">
        Go
      </button>
    </div>
  </div>
</template>
