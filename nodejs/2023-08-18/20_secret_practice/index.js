const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
const userRouter = require('./routes/user');
app.use('/', userRouter);

//404
app.use('*', (req, res) => {
    res.render('404');
});

//server open
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

const crypto = require("crypto");
const salt = crypto.randomBytes(16).toString("base64");
const keylen = 64;
const digest = "sha512";

const createHashedPassword = (password) => {
    return crypto.createHash("sha512").update(password).digest("base64");
};

const createPbkdf = (password) => {
    return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString("base64");
};

const verifyPassword = (password, salt, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString("base64");
    if (compare === dbPassword) return true;
    return false;
};