const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});
//회원목록
const members = [
    {
        id: 1,
        name: "KIM",
        gender: "남",
        major: "기계"
    },
    {
        id: 2,
        name: "JEONG",
        gender: "여",
        major: "컴공"
    },
    {
        id: 3,
        name: "LEE",
        gender: "남자",
        major: "경제"
    },
    {
        id: 4,
        name: "PARK",
        gender: "여자",
        major: "화공"
    },
    {
        id: 5,
        name: "CHOI",
        gender: "남자",
        major: "패디"
    },
];

module.exports = members;