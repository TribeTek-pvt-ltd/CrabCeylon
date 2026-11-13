const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html><body>
        <img id="img" src="/img.jpg">
        <script>
          const img = document.getElementById('img');
          img.onload = () => {
            // Card 0 bottom: x: 5 to 110, y: 170 to 225
            const c = document.createElement('canvas');
            c.width = 110 * 3;
            c.height = 55 * 3;
            const ctx = c.getContext('2d');
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 5, 170, 110, 55, 0, 0, c.width, c.height);

            fetch('/save', {
              method: 'POST',
              body: c.toDataURL('image/png')
            });
          };
        </script>
      </body></html>
    `);
  } else if (req.url === '/img.jpg') {
    const data = fs.readFileSync('C:/Users/ken74/.gemini/antigravity/brain/e40c8f27-112a-4347-b34b-223b6053a80f/.user_uploaded/media_1794467466772_8c2f9e5d.jpg');
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  } else if (req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      fs.writeFileSync('scratch/bottom_card0_magnified.png', body.replace(/^data:image\/png;base64,/, ''), 'base64');
      console.log('Saved scratch/bottom_card0_magnified.png');
      res.writeHead(200); res.end('ok');
      setTimeout(() => { server.close(); process.exit(0); }, 500);
    });
  }
});

server.listen(4491, () => {
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4491');
});

