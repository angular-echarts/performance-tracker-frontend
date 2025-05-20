
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://bunny-iLink.github.io/performance-tracker-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-O5VMAIWG.js"
    ],
    "route": "/performance-tracker-frontend"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-52OCSHAZ.js"
    ],
    "route": "/performance-tracker-frontend/dynamic"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3153, hash: '30cd9bc7f0ef946a178ba669a62c0f61a8dac2e1b5ae422a0356d8dc3f734e2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3498, hash: 'e25ac5ecd0fb7a36c52992bb4cc519794a2aa904c27bf8544399c693952f74ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dynamic/index.html': {size: 5065, hash: '86f946df79a092d6014ec72554348a9059f1e69ed9371dd973866b064e2f31e8', text: () => import('./assets-chunks/dynamic_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10090, hash: '069c73363f54bb67b4158a526bb68bfeb3b91227cffdfecaa544f54a9e82b47d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7OLXN7PI.css': {size: 43, hash: '04K83d76Ico', text: () => import('./assets-chunks/styles-7OLXN7PI_css.mjs').then(m => m.default)}
  },
};
