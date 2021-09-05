module.exports = {
    '/reactChild1': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            '^/reactChild': ''
        },
        logLevel: 'debug'
    }
};
