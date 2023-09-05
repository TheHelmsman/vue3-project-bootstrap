<template>
  <MainLayout v-show="mainStore.isTitleVisible" prop="prop" />
  <div class="u-icon--home"></div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores';
import MainLayout from '@/components/MainLayout.vue';
import { useConfig } from '@/services/config';

useConfig();
const mainStore = useMainStore();
</script>
