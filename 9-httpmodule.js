const http=require('http')

const server=http.createServer((req,res)=>{
res.write('welcome to http server');
res.end();
})
server.listen(4000);
const arr=[1,2,3];