const express = requir("express");
const router = express.router();
const 

// router
router.get("/", (req, res) => {
    res.render("index");
});

// axios post
router.get("/axiosPost", (req, res) => {
    res.render("post",{ title: "axios post 실습"});
})
router.post("/resultPost", (req, res) => {
    const id = "kim";
    const pw = "1234";
    console.log(req.body);
    if ( id === req.body.id && pw === req.body.pw) {
        res.send({ result: true, userInfo: req.body});
    } else {
        res.send({ result: false, userInfo: null});
    }
});

module.exports = router;