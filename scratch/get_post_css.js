const https = require('https');
https.get('https://scalehubglobal.in/wp-content/uploads/elementor/css/post-6100.css', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('post-6100.css length:', data.length);
    const idx = data.indexOf('mtfe-solaris');
    if (idx !== -1) {
      console.log(data.substring(idx - 100, idx + 1000));
    } else {
      console.log('No mtfe-solaris in post-6100.css');
    }
  });
}).on('error', err => console.log('Err:', err.message));

