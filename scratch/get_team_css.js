const https = require('https');
https.get('https://scalehubglobal.in/wp-content/plugins/modeltheme-core/widgets/solaris-our-team/css/solaris-our-team.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('CSS length:', data.length);
    console.log(data);
  });
}).on('error', err => console.log('Err:', err.message));

