const path=require('path');
console.log(path.sep);
console.log(path.basename('content/folder/test.txt'));

console.log(path.resolve(__dirname,'content','folder','test.txt'));