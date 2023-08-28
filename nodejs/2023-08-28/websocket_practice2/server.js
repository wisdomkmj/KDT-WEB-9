const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//투표결과 초기화 변수
const votes = {
    typeOne: 0,
    typeTwo: 0,
};

//웹소켓 서버 접속
const wss = new ws.Server({ server });

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    
    socket.on('message', (message) => {
        //오는 값 파싱하기.
        const parse = JSON.parse(message);
        console.log(parse);
        votes[parse.vote]++ //1씩증가.
        //전체 서버에게 값을 전달해주기.
        wss.clients.forEach((client) => {
            client.send(JSON.stringify(votes));
        });
    });
    //오류이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생하였습니다', err);
    });
    //접속종료이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료되었습니다.');
    });
});
