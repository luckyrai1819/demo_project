const {readFileSync,writeFileSync}=require('fs')
const {readFile,writeFile}=require('fs');
// const first=readFileSync('./content/first.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');

// console.log(first);
// console.log(second);

// // writeFileSync('./content/result-sync.txt',`the result is : ${first} , ${second}`)

// writeFileSync('./content/result-sync.txt',`this is the appended data`,{flag:'a'})

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })

writeFile('./content/result-async.txt','this is the result-async file',(err,result)=>{
if(err){
    console.log(err);
    return;
}
console.log(result);
})