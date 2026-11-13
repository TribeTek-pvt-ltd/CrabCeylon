const https = require('https');
https.get('https://scalehubglobal.in/wp-content/uploads/elementor/css/post-6100.css', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('7ba680f');
    if (idx !== -1) {
      console.log(data.substring(idx - 50, idx + 2000));
    }
  });
}).on('error', err => console.log('Err:', err.message));

