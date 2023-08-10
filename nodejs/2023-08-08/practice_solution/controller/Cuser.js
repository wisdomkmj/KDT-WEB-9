const User = require('../model/User');

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};
exports.post_signup = (req, res) => {
    //model
    User.post_signup(req.body, () => {
        res.send({ result: true });
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signin = (req, res) => {
    //model
    User.post_signin(req.body, (result) => {
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        }
    });
};

exports.delete_profile = (req, res) => {
    const query = `UPDATE user SET userid ="${data.userid}`, pw="${data.userpw}"
}

exports.delete_profile = (id, callback)