const path = require('path');
const fs = require('fs');

const harPath = path.resolve(__dirname, '..', '..', '..', 'Downloads', 'localhost2.har');
const content = fs.readFileSync(harPath, 'utf8');
const harObj = JSON.parse(content);

const entryArray = harObj.log.entries
    .map((entry) => {
        const request = `${entry.request.method} ${entry.request.url}`;
        const {
            status,
            headersSize,
            bodySize,
            _transferSize
        } = entry.response;

        return {
            request,
            status,
            headersSize,
            bodySize,
            transferSize: _transferSize
        };
    })
    .filter((entry) => !entry.request.includes('reqres') && entry.transferSize > 0);

const total = entryArray
    .reduce((acc, entry) => {
        return acc += entry.transferSize;
    }, 0);

console.log(`Total Size: ${total.toLocaleString()}`);
