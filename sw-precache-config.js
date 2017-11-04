module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'bower_components/webcomponentsjs/webcomponents-loader.js',
    'images/*'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
      handler: 'fastest',
      options: {
        cache: {
          name: 'webcomponentsjs-polyfills-cache'
        }
      }
    },
    {
      urlPattern: /\/v0\/.*/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 200,
          name: 'items-cache'
        }
      }
    },
  ],
  directoryIndex: 'index.html',
  navigateFallback: 'index.html',  
  navigateFallbackWhitelist: [/^(?!\/__).*/],
};