
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/performance-tracker-frontend/',
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
    'index.csr.html': {size: 3124, hash: '9958e1152e3e6dbbc3dbe918160eb13551ce394454321e794c186203fe2bccc0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3469, hash: '5b897c386bff2187d8e128ed2b196be6d30b6b5ef6e7d53c8de014eb489faa4d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dynamic/index.html': {size: 5036, hash: '0d271061704cf66377a855f7084b0befb4071253a8b6dbfa3e638fac3fd22e24', text: () => import('./assets-chunks/dynamic_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10061, hash: '6cd64d6f2813d0f9f85f95ef68033df8722b7a9732fff303537e175858367f21', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7OLXN7PI.css': {size: 43, hash: '04K83d76Ico', text: () => import('./assets-chunks/styles-7OLXN7PI_css.mjs').then(m => m.default)}
  },
};
