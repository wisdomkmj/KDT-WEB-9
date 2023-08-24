const model = require('../model/Model');

const main = (req, res) => {
    res.render("index");
};

const comments = (req, res) => {
    res.render("comments", {lists: model});
};

const comment = (req, res) => {
    console.log(req.params); //req.params로 :id 접근가능. 
    res.render("comment", { data: model[Number(req.params.name)-1]});
};

module.exports = {
    //key: value
    main: main,
    comm: comments,
    comment
};

//모듈 사용 방법
//방법 1
//module.exports.main = "함수, 변수, 문자열, 숫자"
//exports.main = null //위 축약형
//방법 2
// const test = () => {}
// module.exports = test