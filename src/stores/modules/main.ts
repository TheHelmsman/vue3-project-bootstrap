import { defineStore } from 'pinia';
import config from '@/services/config';
import { MainState } from '@/types/stores';

export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    config,
  }),
  getters: {
    isTitleVisible() {
      return true;
    },
  },
  actions: {},
});
