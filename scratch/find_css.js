const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // print all occurrences of mtfe-solaris-our-team
    let idx = 0;
    while ((idx = data.indexOf('.mtfe-solaris-our-team', idx)) !== -1) {
      console.log('Found CSS rule at idx', idx, ':', data.substring(idx, idx + 200));
      idx += 20;
    }
  });
}).on('error', err => console.log('Err:', err.message));

