
export default {
  basePath: 'https://bunny-iLink.github.io/performance-tracker-frontend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
