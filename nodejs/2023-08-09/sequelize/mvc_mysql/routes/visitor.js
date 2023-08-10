const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("index");
// });

// ->>->>->>->>->>->>->>->>->>->>>>->>->>->>->>->>->>->>->>->>

// GET /visitor 방명록 전체 보이기
// router.get("/visitor", (req, res) => {
//     const query = "SELECT * FROM visitor" // 전체 데이터를 가져오는 쿼리.
//     conn.query(query, (err, rows) => {
//         console.log(rows);
//     })
//     res.render("visitor", { data: rows });
// }); 

 
router.get("/", controller.getVisitors);

// ->>->>->>->>->>->>->>->>->>->>>>->>->>->>->>->>->>->>->>->>

// GET /visitor/get 방명록 하나 조회
// router.get("/visitor/get", (req, res) => {
//     const query = `SELECT * FROM visitor WHERE id= ${req.query.id}`;
//     conn.query(query, (err, rows) =>{
//         if (err) {
//             console.log(err);
//             return;
//         }
//     })
// });

router.get("/get", controller.getVisitor);

// ->>->>->>->>->>->>->>->>->>->>>>->>->>->>->>->>->>->>->>->>

// POST /visitor/write 방명록 하나 생성
// router.post("/write", (req, res) => {
//     const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}', '${req.body.commet}')`;
//     conn.query(query, (err, rows) => {
        
//     }) 
//     res.send({id: rows.insertId, name: req.body.name, comment: req.body.comment});
// });

router.post("/write", controller.patchVisitor);

// ->>->>->>->>->>->>->>->>->>->>>>->>->>->>->>->>->>->>->>->>

// PATCH /visitor/edit 방명록 하나 수정
// router.patch("/edit", (req, res) => {
//     res.send("방명록 하나 수정");
//     const query = `UPDATE visitor SET name="${req.body.name}", comment="${req.body.comment}" WHERE`
//     conn.query(query, (err, rows) => {
//         console.log("rows", rows);
//         if(err) {
//             console.log(err);
//         }
//     })
// }); 

router.patch("/edit", controller.patchVisitor);

// ->>->>->>->>->>->>->>->>->>->>>>->>->>->>->>->>->>->>->>->>

// DELETE /visitor/edit 방명록 하나 삭제
// router.post("/visitor/delete", (req, res) => {
//     const query = `DELETE FROM visitor WHERE id = ${req.body.id}`;
//     conn.query(query, (err, rows) => {
//         if(err) {
//             console.log(err);
//             res.send({ result: false });
//             return;
//         }
//         res.send({ result: true});
//     });

// });

router.delete("/delete", controller.deleteVisitor);

// ->>->>->>->>->>->>->>->>->>->>>>->>->>->>->>->>->>->>->>->>

module.exports = router;