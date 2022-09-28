import fs from 'fs';
// Asynchronous read
fs.readFile('dist/input.txt', function (err: Error, data: Buffer) {
  if (err) {
    return console.error(err);
  }
  console.log('Asynchronous read: ' + data.toString());
});
// Synchronous read
var data = fs.readFileSync('dist/input.txt');
console.log('Synchronous read: ' + data.toString());
console.log('Program Ended');

// Write to file
fs.writeFile(
  'dist/testfile.js',
  'console.log("This is inside a test file");',
  function (err) {
    console.log('File saved');
  }
);

// Append to file
fs.appendFile(
  'dist/testfile.js',
  '\nconsole.log("This is some extra content");',
  function (err) {
    console.log('Content added to file');
  }
);

// Delete a file
fs.unlink('dist/testfile.js', function (err) {
  console.log('Deleted the file');
});
