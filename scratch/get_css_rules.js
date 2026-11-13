const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('mtfe-solaris-our-team__shape');
    // check if there are style tags containing mtfe-solaris
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let m;
    while ((m = styleRegex.exec(data)) !== null) {
      if (m[1].includes('mtfe-solaris-our-team')) {
        console.log('Found CSS in style tag:');
        console.log(m[1].substring(0, 1500));
      }
    }
  });
}).on('error', err => console.log('Err:', err.message));

