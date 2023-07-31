// const a = "a 변수" ;
// const b = "b 변수";

// module.exports = {a: abc, b}

const http = rquire('http');
const fs = require('fs');

const server = http.createSever ()

//파일전송
try {
    const data = fs.readFileSync('./index.html')
    resizeBy.writeHead(200);
    resizeBy.end(data);
} catch (error) {
    console.log(error)
    res.writeHead(404);
    res.end(error.message);
}