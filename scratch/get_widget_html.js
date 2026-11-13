const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('mtfe-solaris-our-team');
    if (idx !== -1) {
      console.log('--- WIDGET HTML START ---');
      console.log(data.substring(idx - 100, idx + 3000));
      console.log('--- WIDGET HTML END ---');
    }
  });
}).on('error', err => console.log('Err:', err.message));

