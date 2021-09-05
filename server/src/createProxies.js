const { createProxyMiddleware } = require('http-proxy-middleware');

const createProxies = (app) => {
    app.use('/reactChild1', createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            '^/reactChild1': ''
        },
        logLevel: 'debug'
    }));
};

module.exports = createProxies;
