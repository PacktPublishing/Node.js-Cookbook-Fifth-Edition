const http = require('node:http');
const path = require('node:path');

process.report.directory = path.join(__dirname, 'reports');
process.report.filename = 'my-diagnostic-report.json';

http.get('hello://localhost:3000', (response) => {});
