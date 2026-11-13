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
        <canvas id="c"></canvas>
        <script>
          const img = document.getElementById('img');
          img.onload = () => {
            const c = document.getElementById('c');
            c.width = img.naturalWidth;
            c.height = img.naturalHeight;
            const ctx = c.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // Let's inspect each card's red pillar bounds:
            // For card 0: x from 5 to 105
            // Let's find top-left and top-right of the red shape
            const cardInfo = [];
            for (let card = 0; card < 4; card++) {
              const xStart = card * 114 + 5;
              const xEnd = xStart + 100;
              // find red pixels at y = 70
              let redStart = -1, redEnd = -1;
              for (let x = xStart; x < xEnd; x++) {
                const p = ctx.getImageData(x, 70, 1, 1).data;
                const isRed = p[0] > 180 && p[1] < 100 && p[2] < 100;
                if (isRed && redStart === -1) redStart = x - xStart;
                if (isRed) redEnd = x - xStart;
              }
              cardInfo.push({ card, redStart, redEnd, width: 95 });
            }

            fetch('/result', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(cardInfo)
            });
          };
        </script>
      </body></html>
    `);
  } else if (req.url === '/img.jpg') {
    const data = fs.readFileSync('C:/Users/ken74/.gemini/antigravity/brain/e40c8f27-112a-4347-b34b-223b6053a80f/.user_uploaded/media_1794467466772_8c2f9e5d.jpg');
    res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Content-Length': data.length });
    res.end(data);
  } else if (req.url === '/result') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.log('Card info:', body);
      res.writeHead(200); res.end('ok');
      setTimeout(() => { server.close(); process.exit(0); }, 500);
    });
  }
});

server.listen(4499, () => {
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4499');
});

