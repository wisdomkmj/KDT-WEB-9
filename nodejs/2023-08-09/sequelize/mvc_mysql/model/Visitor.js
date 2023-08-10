// exports.getVisitors = () => {
//     return [
//         {id: 1, name: "홍길동", comment: "내가 왔다."},
//         {id: 2, name: "홍길똥", comment: "나도 왔다."},
//     ];
// };

const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "kdt9",
    port: 3306,
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("connect");
});

exports.getVisitors = (callback) => {
    const query = "SELECT * FROM visitor";
    conn.query(query, (err, rows) => {
        console.log(rows);
        callback(rows);
    });
};

exports.getVisitor = (id, callback) => {
    const query = `SELEECT * FROM visitor WHERE id = ${id}`;
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        };
        callback(rows);
    });
};

exports.postVisitor = (data, callback) => {
    const query = `INSERT INTO visitor (name, comment) VALUES ("${data.name}", "${data.comment}")`;
    conn.query(query, (err, rows) => {
        console.log("rows", rows);
        callback(rows);
    })
}

exports.patchVisitor = (data, callback) => {
    const query = `UPDATE visitor SET name="${data.name}, comment="${data.comment}" WHERE id="${data.id}`;
    conn.query(query, (err, rows) => {
        console.log("rows", rows);
        if(err) {
            console.log(err);
            return;
        }
        callback;
    });
};

exports.deleteVisitor = (data, callback) => {
    const query = `DELETE FROM visitor WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        };
        callback();
    });
};