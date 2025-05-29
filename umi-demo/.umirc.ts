// .umirc.ts
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index/index' },
    { path: '/about', component: '@/pages/about/index' },
  ],
  fastRefresh: true, // 改为布尔值
  mock: {
    include: ['src/mock/**/*.ts'],
  },
});