const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html><body>
        <canvas id="c"></canvas>
        <img id="img" src="/img.jpg">
        <script>
          const img = document.getElementById('img');
          img.onload = () => {
            const c = document.getElementById('c');
            c.width = 454;
            c.height = 225;
            const ctx = c.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // Card 1 is x: ~120 to ~225, y: 60 to 220
            // The red pillar is on the left of card 1: x: ~120 to ~165
            // Let's create a 4x magnified crop of the red pillar of Card 1
            const c2 = document.createElement('canvas');
            c2.width = 45 * 4;
            c2.height = 120 * 4;
            const ctx2 = c2.getContext('2d');
            ctx2.imageSmoothingEnabled = false;
            ctx2.drawImage(img, 122, 60, 45, 120, 0, 0, c2.width, c2.height);

            fetch('/save', {
              method: 'POST',
              body: c2.toDataURL('image/png')
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
      fs.writeFileSync('scratch/pillar_magnified.png', body.replace(/^data:image\/png;base64,/, ''), 'base64');
      console.log('Saved scratch/pillar_magnified.png');
      res.writeHead(200); res.end('ok');
      setTimeout(() => { server.close(); process.exit(0); }, 500);
    });
  }
});

server.listen(4490, () => {
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4490');
});

