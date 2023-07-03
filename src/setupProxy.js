const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.pintu.co.id',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        // Pragma header with the value no-cache and the Expires header with the value 0. These headers provide additional instructions to prevent caching.
      },
      pathRewrite: {
        '^/api': '',
      },
    })
  );
  
  app.use(
    '/static.pintu.co.id/assets/images/logo',
    createProxyMiddleware({
      target: 'https://s3-ap-southeast-1.amazonaws.com',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  );

  app.use(
    '/content.pintu.co.id',
    createProxyMiddleware({
      target: 'https://s3-ap-southeast-1.amazonaws.com',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  );
};
