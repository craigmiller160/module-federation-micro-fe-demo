const {
    getCacheControl,
    getFilePath,
    getContentType
} = require('./utilities');
const fs = require('fs');
const path = require('path');

const createRoute = (app, buildRoot) => {
    app.get('/**', (req, res) => {
        console.log(`Received request: ${req.method} ${req.path}`);
        const filePath = getFilePath(buildRoot, req.path);
        if (!fs.existsSync(filePath)) {
            res.redirect('/');
            return;
        }

        console.log(`Returning file: ${filePath}`);

        const extension = path.extname(filePath);
        const content = fs.readFileSync(filePath, 'utf8');

        res.set({
            'Content-Type': getContentType(extension),
            'Cache-Control': getCacheControl(req.path)
        })
        res.send(content);
    });
};

module.exports = createRoute;
