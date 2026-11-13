const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <body style="margin:0; background:#fff;">
        <iframe id="frame" src="http://localhost:3000" style="width:1280px; height:1200px; border:none;"></iframe>
        <script>
          const frame = document.getElementById('frame');
          frame.onload = () => {
            setTimeout(() => {
              try {
                const doc = frame.contentDocument || frame.contentWindow.document;
                const el = doc.getElementById('ministers');
                if (el) {
                  el.scrollIntoView();
                }
              } catch (e) {}
              fetch('/loaded');
            }, 2000);
          };
        </script>
      </body>
      </html>
    `);
  } else if (req.url === '/loaded') {
    console.log('Live page loaded successfully');
    res.writeHead(200); res.end('ok');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  }
});

server.listen(4498, () => {
  console.log('Listening on 4498');
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4498');
});

