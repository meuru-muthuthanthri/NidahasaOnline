const path = require('path');
const fs = require('fs');
const require1 = require('../src/Logic/SongProcessor');


const SongsPath = '../Songs';
const directoryPath = path.join(__dirname, SongsPath);

function writeJson(content) {
  fs.writeFile('src/repository/Songs/Songs.json', JSON.stringify(content), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log(`Unable to scan directory: ${err}`);
    return;
  }

  const output = {};
  files.forEach((fileName) => {
    if (fileName === 'README.md') {
      return;
    }
    const text = fs.readFileSync(`${directoryPath}/${fileName}`).toString('utf-8');
    output[fileName.replace('.txt', '')] = text;
    console.log('File getSongs: ', fileName);
  });
  // console.log("########", output);
  writeJson(require1.process(output));
});



