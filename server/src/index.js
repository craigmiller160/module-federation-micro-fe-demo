const express = require('express');
const createProxies = require('./createProxies');
const createRoute = require('./createRoute');
const path = require('path');

const startServer = () => {
    const buildRoot = path.resolve(__dirname, process.argv[2]);
    const port = process.argv[3];

    const app = express();
    createProxies(app);
    createRoute(app, buildRoot);

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

startServer();
