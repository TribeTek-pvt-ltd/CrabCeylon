const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const cssRegex = /href="([^"]+\.css[^"]*)"/gi;
    let m;
    while ((m = cssRegex.exec(data)) !== null) {
      if (m[1].includes('modeltheme') || m[1].includes('elementor') || m[1].includes('widget')) {
        console.log('CSS:', m[1]);
      }
    }
  });
}).on('error', err => console.log('Err:', err.message));

