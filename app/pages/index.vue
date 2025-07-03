<template>
  <div>
    <div>
      <UBreadcrumb separator-icon="i-lucide-arrow-right" :items="items" />
    </div>
    <div
      class="h-[80dvh] p-3 rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-700 bg-white dark:bg-slate-800 mt-5">
      <MyCharts />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const items = ref<BreadcrumbItem[]>(
  [{
    label: 'Dashboard',
    icon: 'hugeicons:dashboard-square-02',
    to: '/'
  },
  ])
</script>