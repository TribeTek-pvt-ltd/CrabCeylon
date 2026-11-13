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
            
            // Inspect card 0 (Omar Mehri)
            // Width: ~110px. Let's sample colors at y = 80 (top area of card 0)
            const row80 = [];
            for (let x = 0; x < 110; x += 5) {
              const p = ctx.getImageData(x, 80, 1, 1).data;
              row80.push({ x, rgb: \`rgb(\${p[0]},\${p[1]},\${p[2]})\` });
            }

            // Let's sample colors at y = 200 (bottom area of card 0)
            const row200 = [];
            for (let x = 0; x < 110; x += 5) {
              const p = ctx.getImageData(x, 200, 1, 1).data;
              row200.push({ x, rgb: \`rgb(\${p[0]},\${p[1]},\${p[2]})\` });
            }

            // Let's check the red color hex
            const pRed = ctx.getImageData(25, 80, 1, 1).data;
            const hexRed = '#' + (1 << 24 | pRed[0] << 16 | pRed[1] << 8 | pRed[2]).toString(16).slice(1);

            fetch('/result', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ hexRed, row80, row200 })
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
      console.log('Result:', body);
      res.writeHead(200); res.end('ok');
      setTimeout(() => { server.close(); process.exit(0); }, 500);
    });
  }
});

server.listen(4488, () => {
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4488');
});

