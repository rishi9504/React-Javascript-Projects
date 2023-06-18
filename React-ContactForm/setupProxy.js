const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/submit',
    createProxyMiddleware({
      target: 'http://localhost:5000', // Change the URL if your Flask app runs on a different port
      changeOrigin: true,
    })
  );
};
