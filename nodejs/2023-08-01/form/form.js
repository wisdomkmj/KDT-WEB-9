app.get("/getForm", function (req, res) {
    console.log(req.query);
    res.send("GET 요청 성공!");
});

app.post("/postForm", function (req, res) {
    console.log(req.body);
    res.send("POST 요청 성공!");
})