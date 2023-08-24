const info = require('../model/Model');

const main = (req, res) => {
    res.render('index');
};

const members = (req, res) => {
    res.render("members", {lists: info});
};

const member = (req, res) => {
    //console.log(req, params);
    //res.render("member", { data: info[Number(req.params.name)-1]});
    const { name, gender, major } = req.body;
    info.push({
        id: info.length + 1 ,
        name,
        gender,
        major,
    })
};

module.exports = {
    main: main,
    mems: members,
    mem: member
};
