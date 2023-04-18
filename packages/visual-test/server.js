const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // parse URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // serve static files from "static" directory
  const filePath = path.join(__dirname, 'storybook-static', url.pathname);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // if file not found, return 404 error
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found');
      res.end();
    } else {
      // if file found, return file contents
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.write(data);
      res.end();
    }
  });
});

// helper function to get content type based on file extension
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return 'application/octet-stream';
  }
}

// start server on port 3000
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
