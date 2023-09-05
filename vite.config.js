import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import VueTypeImports from 'vite-plugin-vue-type-imports';

export default defineConfig(({ mode }) => {
  const isDev = Boolean(mode === 'development');
  return {
    server: {
      origin: 'http://127.0.0.1:5173',
    },
    base: '/', // path relative to deployment directory
    plugins: [
      vue(),
      vueI18n({
        include: resolve(__dirname, './src/locales/**'),
      }),
      VueTypeImports(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:math";
            @use "sass:color";
            @import "@/style/index.scss";
            @import "@/style/_core";
            @import "@/assets/fonts/iconfont/index";
          `,
        }, // global css
      },
    },
    build: {
      target: 'esnext',
      watch: isDev ? { exclude: './src/assets/**' } : null, //watch in dev, exclude iconfont for prevent looping
      minify: !isDev,
      sourcemap: isDev,
      emptyOutDir: false,
      outDir: './dist', // path relative to deployment directory
      rollupOptions: {
        treeshake: !isDev,
        output: {
          entryFileNames: `assets/[name].js`, // main js chunks, hash in name is disabled
          chunkFileNames: `assets/[name].js`, // js chunks
          assetFileNames: `assets/[name].[ext]`, // other
        },
      },
    },
  };
});
