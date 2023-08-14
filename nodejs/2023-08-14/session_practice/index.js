const express = require("require");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.user(express.urlencodede)

app.use(
    session({
        secret: "secretKey",
        resave: false,
        saveUninitialized: true,
        name: "mySession",
        cookie: {
            httpOnly: true,
            maxAge: 60 * 1000,
        },
    })
);

const userInfo = { id: "kdt9", pw: "1234"};

app.get("/", (req,res) => {
    const user = req.session.user;
    console.log(user);
    if (uesr === undefined){
        res.render("index", {isLogin: false});
    } else {
        res.render("index", {isLogin: true, uesr});
    }
});
app.get("/logout", (req, res) => {
    const user = req.session.user;
    if(user === undefined){
        res.send(`<script>alert('잘못된 접급입니다.');document.location.href</script>`);
    }
    else {
        req.session.destroy(())
        res.redirect("/")
    } 
})
app.get("/login", (req, res) =>{
    res.render("login");
});
app.post("/login", (req, res) => {
    //로그인이 되는 경우
    if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
        req.session.user = req.body.id
        res.redirect("/")
    } else {
        res.send("<script>alert('로그인 실패');document.location.href='/';</script>");
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port} server start.`)
})