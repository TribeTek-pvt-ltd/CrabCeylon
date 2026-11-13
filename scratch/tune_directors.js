const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          body { font-family: 'Plus Jakarta Sans', sans-serif; background: #ffffff; }
        </style>
      </head>
      <body class="bg-[#ffffff] text-[#111827] py-6 px-4">
        <div id="capture" class="max-w-[1020px] mx-auto bg-white p-4">
          <!-- Section Title: Exactly like the photo -->
          <div class="text-center mb-10">
            <h2 class="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight">
              Board Of Directors
            </h2>
          </div>

          <!-- 4 Cards Grid -->
          <div class="grid grid-cols-4 gap-5 justify-items-center">
            
            <!-- Director 1: Omar Mehri -->
            <div class="relative w-[228px] h-[350px] select-none rounded-tl-[40px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <!-- Red Arch Pillar -->
              <div class="absolute left-0 top-0 bottom-0 w-[54%] bg-[#e03b3b] rounded-tl-[40px] overflow-hidden">
                <div class="absolute top-7 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-[38px] text-white/20 uppercase tracking-[0.22em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>

              <!-- Portrait Cutout (slightly scaled up to fill nicely like photo) -->
              <div class="absolute inset-x-0 bottom-0 top-2 z-10 flex items-end justify-center pointer-events-none">
                <img src="/img/omar"
                     alt="Omar Mehri"
                     class="w-full h-full object-contain object-bottom scale-105 origin-bottom drop-shadow-[0_10px_16px_rgba(0,0,0,0.25)]">
              </div>

              <!-- Bottom Red Banner -->
              <div class="absolute bottom-0 inset-x-0 pt-14 pb-3.5 px-3.5 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#e03b3b] from-35% via-[#e03b3b]/90 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-10 h-3.5 bg-white/25 rounded-tl-xl pointer-events-none"></div>

                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-[17px] font-bold text-white tracking-tight leading-snug">
                    Omar Mehri
                  </h3>
                  <p class="font-sans text-[11px] text-white/80 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

            <!-- Director 2: Layla Samuel -->
            <div class="relative w-[228px] h-[350px] select-none rounded-tl-[40px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div class="absolute left-0 top-0 bottom-0 w-[54%] bg-[#e03b3b] rounded-tl-[40px] overflow-hidden">
                <div class="absolute top-7 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-[38px] text-white/20 uppercase tracking-[0.22em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 top-2 z-10 flex items-end justify-center pointer-events-none">
                <img src="/img/layla"
                     alt="Layla Samuel"
                     class="w-full h-full object-contain object-bottom scale-105 origin-bottom drop-shadow-[0_10px_16px_rgba(0,0,0,0.25)]">
              </div>
              <div class="absolute bottom-0 inset-x-0 pt-14 pb-3.5 px-3.5 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#e03b3b] from-35% via-[#e03b3b]/90 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-10 h-3.5 bg-white/25 rounded-tl-xl pointer-events-none"></div>
                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-[17px] font-bold text-white tracking-tight leading-snug">
                    Layla Samuel
                  </h3>
                  <p class="font-sans text-[11px] text-white/80 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

            <!-- Director 3: Draper Timothy -->
            <div class="relative w-[228px] h-[350px] select-none rounded-tl-[40px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div class="absolute left-0 top-0 bottom-0 w-[54%] bg-[#e03b3b] rounded-tl-[40px] overflow-hidden">
                <div class="absolute top-7 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-[38px] text-white/20 uppercase tracking-[0.22em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 top-2 z-10 flex items-end justify-center pointer-events-none">
                <img src="/img/draper"
                     alt="Draper Timothy"
                     class="w-full h-full object-contain object-bottom scale-105 origin-bottom drop-shadow-[0_10px_16px_rgba(0,0,0,0.25)]">
              </div>
              <div class="absolute bottom-0 inset-x-0 pt-14 pb-3.5 px-3.5 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#e03b3b] from-35% via-[#e03b3b]/90 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-10 h-3.5 bg-white/25 rounded-tl-xl pointer-events-none"></div>
                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-[17px] font-bold text-white tracking-tight leading-snug">
                    Draper Timothy
                  </h3>
                  <p class="font-sans text-[11px] text-white/80 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

            <!-- Director 4: Mariam shah -->
            <div class="relative w-[228px] h-[350px] select-none rounded-tl-[40px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <div class="absolute left-0 top-0 bottom-0 w-[54%] bg-[#e03b3b] rounded-tl-[40px] overflow-hidden">
                <div class="absolute top-7 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-[38px] text-white/20 uppercase tracking-[0.22em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 top-2 z-10 flex items-end justify-center pointer-events-none">
                <img src="/img/mariam"
                     alt="Mariam shah"
                     class="w-full h-full object-contain object-bottom scale-105 origin-bottom drop-shadow-[0_10px_16px_rgba(0,0,0,0.25)]">
              </div>
              <div class="absolute bottom-0 inset-x-0 pt-14 pb-3.5 px-3.5 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#e03b3b] from-35% via-[#e03b3b]/90 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-10 h-3.5 bg-white/25 rounded-tl-xl pointer-events-none"></div>
                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-[17px] font-bold text-white tracking-tight leading-snug">
                    Mariam shah
                  </h3>
                  <p class="font-sans text-[11px] text-white/80 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <script>
          window.addEventListener('load', () => {
            setTimeout(async () => {
              const el = document.getElementById('capture');
              const canvas = await html2canvas(el, { scale: 1 });
              const dataUrl = canvas.toDataURL('image/png');
              await fetch('/save', { method: 'POST', body: dataUrl });
            }, 800);
          });
        </script>
      </body>
      </html>
    `);
  } else if (req.url.startsWith('/img/')) {
    const key = req.url.split('/')[2];
    const map = {
      omar: 'public/images/directors/director_omar.webp',
      layla: 'public/images/directors/director_layla.webp',
      draper: 'public/images/directors/director_draper.webp',
      mariam: 'public/images/directors/director_mariam.webp'
    };
    if (map[key] && fs.existsSync(map[key])) {
      res.writeHead(200, { 'Content-Type': 'image/webp' });
      res.end(fs.readFileSync(map[key]));
    } else {
      res.writeHead(404); res.end();
    }
  } else if (req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      fs.writeFileSync('scratch/rendered_directors_v2.png', body.replace(/^data:image\/png;base64,/, ''), 'base64');
      console.log('Saved scratch/rendered_directors_v2.png');
      res.writeHead(200); res.end('ok');
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 500);
    });
  }
});

server.listen(4497, () => {
  console.log('Server listening on 4497');
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4497');
});

