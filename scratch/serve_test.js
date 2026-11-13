const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('scratch/test_comparison.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url.startsWith('/public') || req.url.startsWith('/images')) {
    const p = 'public' + req.url.replace(/^\/public/, '');
    if (fs.existsSync(p)) {
      res.writeHead(200);
      res.end(fs.readFileSync(p));
    } else {
      res.writeHead(404); res.end();
    }
  }
});

server.listen(4492, () => {
  console.log('Test server ready at http://localhost:4492');
});

