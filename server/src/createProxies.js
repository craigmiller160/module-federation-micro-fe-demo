const { createProxyMiddleware } = require('http-proxy-middleware');

const createProxy = (app, path, target) => {
    app.use(path, createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            [`^${path}`]: ''
        },
        logLevel: 'debug'
    }));
};

const createProxies = (app) => {
    createProxy(app, '/reactChild1', 'http://localhost:3002');
    createProxy(app, '/globalStore', 'http://localhost:3001');
};

module.exports = createProxies;
