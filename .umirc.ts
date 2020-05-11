import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    'common': '@/common',
    'components': '@/components',
    'config': '@/config',
    'utils': '@/utils',

  },
  // routes: [{ path: '/', component: '@/pages/index' }],
});
