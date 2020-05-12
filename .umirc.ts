import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  metas: [
    {'viewport-fit': 'cover'}
  ],
  dva: {
    hmr: true,
    // 默认为 false，且必须 设置 false，否则 plugin-dva 会重复加载 model
    skipModelValidate: false
  },
  alias: {
    'common': '@/common',
    'components': '@/components',
    'config': '@/config',
    'utils': '@/utils',

  },
  // routes: [{ path: '/', component: '@/pages/index' }],
});
