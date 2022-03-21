const http= require('http')
const { readFileSync } = require('fs')

const server=http.createServer((req,res)=>{
    const text=readFileSync('./subfolder/big.txt','utf8')
    res.end(text);
    // res.end('hello')
})
server.listen(4000,()=>{
    console.log('server is running');
});

