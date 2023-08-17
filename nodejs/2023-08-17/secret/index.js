const express = require("express");
const crypto = require("crypto");
const app = express();
const port = 8000;
let pass = "";
const salt = crypto.randomBytes(16).toString("hex");
const leng = 1000; //반복횟수.
const key = 64; //생성할 키의 길이.
const algo = "sha512";

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/login", (req, res) => {
    const { pw } = req.body;
    //createHash: 지정한 알고리즘을 이용하여 해시 생성.
    // 1.
    // const pass = crypto.createHash("sha512").update(pw).digest("base64");
    
    //pdkdf2(Sync): (Sync가 붙으면 동기): 비밀번호 기반 키도출함수.
    // 2.
    pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString("base64")
    res.send(pass);
});

app.post("/verify", (req, res) => {
    const { pw } = req.body;
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo);
    console.log("compare", compare);
    //기본적인 방법.
    // const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString("base64");
    // 변경후.
    // if ( compare === pass ) {
    //     res.send(true);
    // } else {
    //     res.send(false);
    // };

    //timingSafeEqual: 두개의 버퍼를 상수시간으로 비교하는 함수.
    const result = crypto.timingSafeEqual(compare, Buffer.from(pass, "base64"));
    res.send(result);
});

app.listen(port, () => {
    console.log(`http://localhost${port}`);
});  