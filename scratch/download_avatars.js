const https = require('https');
const fs = require('fs');
const path = require('path');

const avatars = [
  { name: 'director_omar.webp', url: 'https://glo.modeltheme.com/wp-content/plugins/modeltheme-core/widgets/solaris-our-team/assets/defaults/team-omar-mehri-avatar.webp' },
  { name: 'director_layla.webp', url: 'https://glo.modeltheme.com/wp-content/plugins/modeltheme-core/widgets/solaris-our-team/assets/defaults/team-layla-samuel-avatar.webp' },
  { name: 'director_draper.webp', url: 'https://glo.modeltheme.com/wp-content/plugins/modeltheme-core/widgets/solaris-our-team/assets/defaults/team-draper-timothy-avatar.webp' },
  { name: 'director_mariam.webp', url: 'https://glo.modeltheme.com/wp-content/plugins/modeltheme-core/widgets/solaris-our-team/assets/defaults/team-mariam-shah-avatar.webp' }
];

const targetDir = 'c:/Users/ken74/Crabceylon/public/images/directors';
fs.mkdirSync(targetDir, { recursive: true });

avatars.forEach(item => {
  const filePath = path.join(targetDir, item.name);
  const file = fs.createWriteStream(filePath);
  https.get(item.url, res => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Saved', item.name, fs.statSync(filePath).size, 'bytes');
    });
  }).on('error', err => {
    console.error('Error downloading', item.name, err.message);
  });
});

