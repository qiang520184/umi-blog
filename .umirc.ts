import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  // ssr: true,
  favicon:
    'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.7.1/images/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  metas: [{ 'viewport-fit': 'cover' }],
  dva: {
    hmr: true,
    // 默认为 false，且必须 设置 false，否则 plugin-dva 会重复加载 model
    skipModelValidate: false,
  },
  alias: {
    common: '@/common',
    static: '@/static',
    components: '@/components',
    config: '@/config',
    utils: '@/utils',
  },
  // routes: [{ path: '/', component: '@/pages/index' }],
});
