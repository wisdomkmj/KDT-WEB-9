const model = require('../model/Model');
////////////////////////////
//get
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입 페이지
const signup = (req, res) => {
    res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
    res.render("signin");
};
//////////////////////////////
//post
//회원가입
const post_signup = (req, res) => {
    model.db_signup(req.body, ()=>{
        res.json({ result: true});
    })
};
//로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if( result.length > 0){
            res.json({result: true, data: result[0]})
        } else {
            res.json({ result: false});
        }
    });
}

module.exports = {
    main,
    signup,
    signin,
    post_signup,
    post_signin
};
