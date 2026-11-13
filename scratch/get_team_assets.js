const https = require('https');
https.get('https://scalehubglobal.in', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/glo\.modeltheme\.com\/[^"'\s]+/g;
    const matches = Array.from(new Set(data.match(regex) || []));
    console.log('Matches:', matches);

    // Also search for any team member names and their image src
    const teamRegex = /team-[a-z-]+-avatar\.(webp|png|jpg)/gi;
    console.log('Avatars:', Array.from(new Set(data.match(teamRegex) || [])));
  });
}).on('error', err => console.log('Err:', err.message));

