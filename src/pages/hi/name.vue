<script setup lang="ts">
import { useRouter } from 'vue-router'
import CarbonConstruction from '~icons/carbon/construction'

const props = defineProps<{ name: string }>()

const router = useRouter()
</script>

<template>
  <div>
    <CarbonConstruction class="text-4xl inline-block" />

    <p>Hi, {{ props.name }}</p>

    <p class="text-sm opacity-50">
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="text-sm mt-8 m-3 px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
