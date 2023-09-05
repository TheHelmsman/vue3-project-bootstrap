<template>
  <MainLayout
    v-show="mainStore.isTitleVisible"
    :title="appTitle"
  />
  <div class="u-icon--home"></div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores';
import MainLayout from '@/components/MainLayout.vue';
import { useConfig } from '@/services/config';
import { computed } from 'vue';

useConfig();
const mainStore = useMainStore();

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const appTitle = computed((): string => {
  return t('vue3project.title') as string;
});
</script>
