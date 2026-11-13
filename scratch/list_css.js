const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const linkRegex = /<link[^>]+rel=['"]stylesheet['"][^>]*>/gi;
    let m;
    while ((m = linkRegex.exec(data)) !== null) {
      console.log(m[0]);
    }
  });
}).on('error', err => console.log('Err:', err.message));

