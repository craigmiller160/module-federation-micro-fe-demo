const path = require('path');

const getContentType = (ext) => {
    switch (ext) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'application/javascript';
        default:
            throw new Error(`Cannot find content-type for extension: ${ext}`);
    }
};

const getFilePath = (buildRoot, requestPath) => {
    switch (requestPath) {
        case '/': return path.join(buildRoot, 'index.html');
        default: return path.join(buildRoot, requestPath);
    }
};

const getCacheControl = (requestPath) => {
    switch (requestPath) {
        case '/remoteEntry.js': return 'no-cache,no-store';
        default: return 'public, max-age=604800';
    }
};

module.exports = {
    getCacheControl,
    getFilePath,
    getContentType
};
