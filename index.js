const fs = require('fs');
const http = require('http');


// const WriteStream = fs.createWriteStream(`${__dirname}/ccc.txt`);

const server = http.createServer((req,res)=>{
    const ReadStream = fs.createReadStream(`${__dirname}/bbb.txt`,'utf8');
ReadStream.pipe(res);
});

server.listen(3000);

console.log('server on');




// ReadStream.on('data',(chunk)=>{
// WriteStream.write(chunk);
// })

// ReadStream.pipe(WriteStream);