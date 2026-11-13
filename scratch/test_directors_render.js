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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          body { font-family: 'Plus Jakarta Sans', sans-serif; background: #ffffff; }
        </style>
      </head>
      <body class="bg-[#ffffff] text-[#111827] py-16 px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-14">
            <h2 class="font-sans text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight">
              Board Of Directors
            </h2>
          </div>

          <!-- 4 Cards Grid -->
          <div class="grid grid-cols-4 gap-6 justify-items-center">
            
            <!-- Director 1 -->
            <div class="relative w-[240px] h-[380px] select-none rounded-tl-[42px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <!-- Red Arch Pillar -->
              <div class="absolute left-0 top-0 bottom-0 w-[52%] bg-[#dc2626] rounded-tl-[42px] overflow-hidden">
                <div class="absolute top-8 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-4xl text-white/20 uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>

              <!-- Portrait Cutout -->
              <img src="/img/omar"
                   class="absolute inset-0 w-full h-full object-contain object-bottom z-10 drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)]">

              <!-- Bottom Red Banner -->
              <div class="absolute bottom-0 inset-x-0 pt-16 pb-4 px-4 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#dc2626] from-40% via-[#dc2626]/85 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-11 h-4 bg-white/25 rounded-tl-xl pointer-events-none"></div>

                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-lg font-bold text-white tracking-tight leading-snug">
                    Omar Mehri
                  </h3>
                  <p class="font-sans text-xs text-white/85 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

            <!-- Director 2 -->
            <div class="relative w-[240px] h-[380px] select-none rounded-tl-[42px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div class="absolute left-0 top-0 bottom-0 w-[52%] bg-[#dc2626] rounded-tl-[42px] overflow-hidden">
                <div class="absolute top-8 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-4xl text-white/20 uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>
              <img src="/img/layla"
                   class="absolute inset-0 w-full h-full object-contain object-bottom z-10 drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)]">
              <div class="absolute bottom-0 inset-x-0 pt-16 pb-4 px-4 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#dc2626] from-40% via-[#dc2626]/85 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-11 h-4 bg-white/25 rounded-tl-xl pointer-events-none"></div>
                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-lg font-bold text-white tracking-tight leading-snug">
                    Layla Samuel
                  </h3>
                  <p class="font-sans text-xs text-white/85 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

            <!-- Director 3 -->
            <div class="relative w-[240px] h-[380px] select-none rounded-tl-[42px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div class="absolute left-0 top-0 bottom-0 w-[52%] bg-[#dc2626] rounded-tl-[42px] overflow-hidden">
                <div class="absolute top-8 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-4xl text-white/20 uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>
              <img src="/img/draper"
                   class="absolute inset-0 w-full h-full object-contain object-bottom z-10 drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)]">
              <div class="absolute bottom-0 inset-x-0 pt-16 pb-4 px-4 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#dc2626] from-40% via-[#dc2626]/85 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-11 h-4 bg-white/25 rounded-tl-xl pointer-events-none"></div>
                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-lg font-bold text-white tracking-tight leading-snug">
                    Draper Timothy
                  </h3>
                  <p class="font-sans text-xs text-white/85 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

            <!-- Director 4 -->
            <div class="relative w-[240px] h-[380px] select-none rounded-tl-[42px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div class="absolute left-0 top-0 bottom-0 w-[52%] bg-[#dc2626] rounded-tl-[42px] overflow-hidden">
                <div class="absolute top-8 left-1.5 pointer-events-none select-none">
                  <span class="font-sans font-black text-4xl text-white/20 uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
                    Directors
                  </span>
                </div>
              </div>
              <img src="/img/mariam"
                   class="absolute inset-0 w-full h-full object-contain object-bottom z-10 drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)]">
              <div class="absolute bottom-0 inset-x-0 pt-16 pb-4 px-4 z-20">
                <div class="absolute inset-0 bg-gradient-to-t from-[#dc2626] from-40% via-[#dc2626]/85 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-11 h-4 bg-white/25 rounded-tl-xl pointer-events-none"></div>
                <div class="relative z-10 text-left">
                  <h3 class="font-sans text-lg font-bold text-white tracking-tight leading-snug">
                    Mariam shah
                  </h3>
                  <p class="font-sans text-xs text-white/85 font-normal mt-0.5">
                    Designation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <script>
          window.addEventListener('load', () => {
            setTimeout(() => {
              fetch('/rendered');
            }, 1000);
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
  } else if (req.url === '/rendered') {
    console.log('Rendered successfully!');
    res.writeHead(200); res.end('ok');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  }
});

server.listen(4495, () => {
  console.log('Server listening on 4495');
  exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu http://localhost:4495');
});

