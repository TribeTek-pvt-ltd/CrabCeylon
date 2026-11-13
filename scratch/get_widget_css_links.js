const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // find css links matching solaris or modeltheme
    const cssRegex = /href="([^"]*solaris[^"]*\.css[^"]*)"/gi;
    let m;
    while ((m = cssRegex.exec(data)) !== null) {
      console.log('CSS:', m[1]);
    }
  });
}).on('error', err => console.log('Err:', err.message));

