<script setup lang="ts">
import CarbonCarbonForIbmProduct from '~icons/carbon/carbon-for-ibm-product'
import { useRouter } from 'vue-router'

const name:string = $ref('')

const router = useRouter()

function go(){
  if(name.length > 0 ){
    router.push(`/hi/${encodeURIComponent(name)}`)
  }
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

    <div class="py-4"></div>

    <input 
      placeholder="What's your name?"
      v-model="name"
      class="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
      autoComplete="false"
      @keydown.enter="go()"
      type="text" 
    />

    <div>
      <button @click="go()" :disabled="name.length <= 0" class="m-3 text-sm px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50">
        Go
      </button>
    </div>
  </div>

</template>
