const http = require("http"); 
// require() : 모듈을 읽어오는 함수.
// http 모듈을 불러와 http 변수에 할당.  
// 모듈명과 변수명은 다르게 해도 문제 없지만, 특별한 경우 아니면 같게 이름 짓는게 관행.

let count = 0;

const server = http.createServer((req, res) => {
// createServer() : 서버 인스턴스를 만드는함수.
// 인수로 콜백 함수를 받고, 콜백 함수에서는 http 서버로 요청이 들어오면 해당 요청을 처리할 함수를 설정.
// 콜백 함수는 req(요청), res(응답) 객체를 인수로 받음.
    log(count); 
    // 전역 변수 count를 사용해 요청에 대한 로그를 간단하게 남김.
    res.statusCode = 200; 
    // 요청에 대한 상태 코드를 200으로 설정. http 프로토콜에서 200은 성공이라는 의미.
    res.setHeader("Content-Type", "text/plain");
    // HTTP는 요청/응답에 대한 부가 정보를 설정할 수 있음.
    // 부가 정보는 header에 설정. Content-Type을 text/plain으로 설정
    // Content-Type : 해당 콘텐츠가 어떤 형태의 데이터인지 나타냄.
    // text/plain : 텍스트를 평문으로 해석한다는 뜻. 
    // cf) text/html : 텍스트를 html로 해석한다는 뜻.
    res.write("hello\n");
    // 응답으로 "hello\n"을 보내줌.
    setTimeout(() => {
        res.end("Node.js");
    }, 2000);
    // setTimeout() : 콜백 함수와 숫자를 인수로 받음. 
    // 숫자 단위: ms
    // setTimeout(), setInterval()과 같은 함수는 타이머 사용.
    // 타이머는 libuv에서 제공하는 기능을 사용하며 이벤트 루프에서 콜 스택을 모니터링하면서 실행 시점을 정함.
});

function log(count){
    console.log((count += 1));
}

server.listen(8000, () => console.log("Hello Node.js")); // 사용할 포트 번호를 8000번으로 지정.