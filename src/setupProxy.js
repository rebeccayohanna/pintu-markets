const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.pintu.co.id',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store', // or 'no-cache'
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
