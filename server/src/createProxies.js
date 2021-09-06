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
    createProxy(app, '/svelteChild1', 'http://localhost:3003');
    createProxy(app, '/vueChild1', 'http://localhost:3004');
    createProxy(app, '/reactChild2', 'http://localhost:3005');
};

module.exports = createProxies;
