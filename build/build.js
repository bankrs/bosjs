const fs = require('fs');
const requestsFolder = './lib/requests/';
const indexFile = './lib/requests/index.ts';

generatePkgIndex();

function generatePkgIndex() {
  console.info('Generate index.ts for lib/requests');

  let requestsList = '';
  
  fs.readdir(requestsFolder, (err, files) => {
    if (err) {
      return console.error(err);
    }
  
    files.forEach(file => {
      const name = file.split('.')[0];
      if (name !== 'index') {
        const importLine = `export { default as ${name} } from './${name}'\n`;
        requestsList += importLine;
      }
    });
  
    fs.writeFile(indexFile, requestsList, err => {
      if (err) {
        return console.log(err);
      }
    });
  });
}
