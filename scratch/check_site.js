const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('scalehubglobal.in length:', data.length);
    const idx = data.indexOf('Omar Mehri');
    if (idx !== -1) {
      console.log('Context:', data.substring(idx - 300, idx + 300));
    } else {
      console.log('Omar Mehri not found in root, searching for team or about');
    }
  });
}).on('error', err => console.log('Err:', err.message));

