import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/estatein_website/', // Укажите путь вашего репозитория
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/*', dest: '' }, // Пример копирования статических файлов, если нужно
      ],
    }),
  ],
});
