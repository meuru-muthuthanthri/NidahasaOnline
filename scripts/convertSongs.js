const path = require('path');
const fs = require('fs');

let SongsPath = '../Songs';
const directoryPath = path.join(__dirname, SongsPath);

const output = {};

function writeJson(content) {
  fs.writeFile('src/repository/Songs/Songs.json', JSON.stringify(content), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
}

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  files.forEach(function (fileName) {
    if(fileName === 'README.md') {
      return;
    }
    var text = fs.readFileSync(`${directoryPath}/${fileName}`).toString('utf-8');
    output[fileName.replace('.txt', '')] = text;
    console.log("File read: ", fileName);
  });
  // console.log("########", output);
  writeJson(output)
});



