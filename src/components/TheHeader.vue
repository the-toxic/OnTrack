<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'

const emit = defineEmits([ 'navigate' ])
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a :href="`#${PAGE_TIMELINE}`" @click="emit('navigate', PAGE_TIMELINE)">
      <img src="../assets/logo.png" alt="Logo" class="h-9">
    </a>
    <a class="text-sm" :href="`#${PAGE_PROGRESS}`" @click="emit('navigate', PAGE_PROGRESS)">
      <div v-if="false" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500" />
      </div>
    </a>
  </header>
</template>
