const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '0000',
    database: 'kdt',
    port: 3306,
});

//회원가입 정보 데이터베이스 저장
const db_signup = (data, callback) => {
    const query = `INSERT INTO user (pw, name, userid) VALUES('${data.pw}', '${data.name}', '${data.userid}')`
    conn.query(query, (err, rows) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("db_signup", rows);
        callback();
    });
};

//로그인
const db_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`
    conn.query(query, (err, rows) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('db_signin', rows);
        //select문의 쿼리문은 배열로 반환.
        callback(rows); 
    });
};

module.exports = {
    db_signup,
    db_signin,
};