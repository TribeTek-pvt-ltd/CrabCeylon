const fs = require('fs');
const css = fs.readFileSync('C:/Users/ken74/.gemini/antigravity/brain/e40c8f27-112a-4347-b34b-223b6053a80f/.system_generated/steps/1420/output.txt', 'utf8');
const lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('__card') || lines[i].includes('__shape') || lines[i].includes('__vertical') || lines[i].includes('__img') || lines[i].includes('__info')) {
    console.log(lines.slice(Math.max(0, i - 1), Math.min(lines.length, i + 25)).join('\n'));
    console.log('----------------------------------------');
    i += 20;
  }
}

