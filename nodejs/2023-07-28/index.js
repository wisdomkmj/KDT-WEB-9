const express = require('express')
const app = express()
const PORT = 8000;

app.set("view engine", "ejs");
app.set('views', './views');

//정적인 파일 불러오기
app.use('/public', express.static('./public'));


app.get('/', (req, res)=>{
    //send() 클라이언트에 응답 데이터를 보낼때
    //res.send('Hello express')
    res.send("Hello Express")  
    res.send({ result: true, code: 1000, message:'회원가입성공', data:{name: "kim"}})
})

app.get('/KDT9', (req, res)=>{
    res.render('test', {name: 'kim'});    
})

// app.get('/fruit', (req, res)=>{
//     res.render('fruit,{})  
// })

// app.get('/gugu', (req, res)=>{
//     res.render('gugu,{})  
// })

app.listen(PORT, () => {
    console.log(`http://localhost:$(PORT)`);
})