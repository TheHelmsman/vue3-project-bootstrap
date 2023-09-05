import { reactive, toRefs, computed } from 'vue';
import { useEventListener } from '@vueuse/core';
import { Config } from '@/types/config';
import { languageDirection } from '@/consts/languageDirection';

const config: Config = reactive({
  locale: import.meta.env.VITE_LOCALE,
  direction: import.meta.env.VITE_DIRECTION,
  controllerLocation: import.meta.env.VITE_API,
  appLocation: import.meta.env.VITE_APP_URL,
});

export function useConfig(callback: (data: Config) => void = () => undefined) {
  useEventListener(top, 'message', ({ data }) => {
    if (data?.type === 'kms:set.config') {
      callback(Object.assign(config, data));
    }
  });

  top.postMessage({ type: 'kms:get.config' }, '*');

  callback(config);

  return {
    ...toRefs(config),
    isRtl: computed(() => config.direction === languageDirection.RTL),
  };
}

export default config;
