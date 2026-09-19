const fs = require('fs');
const path = require('path');
const file = path.join('c:/Users/karth/Desktop/Projects/Cheeky-cup/src/components/GlossierCaughtCheek.jsx');
let content = fs.readFileSync(file, 'utf8');

const bannerStart = content.indexOf('{/* 1. Wide Cinematic');
const galleryStart = content.indexOf('{/* 2. Staggered');
const styleStart = content.indexOf('<style>{`');

if (bannerStart > -1 && galleryStart > -1 && styleStart > -1) {
  const bannerContent = content.substring(bannerStart, galleryStart);
  const galleryContent = content.substring(galleryStart, styleStart);
  
  const newContent = content.substring(0, bannerStart) + galleryContent + bannerContent + content.substring(styleStart);
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Swapped successfully');
} else {
  console.log('Could not find boundaries');
}
