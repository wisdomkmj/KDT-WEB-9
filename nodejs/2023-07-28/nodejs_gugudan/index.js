const express = require('express');
const app = express();
const PORT = 8000;

// app.set("view engine", "ejs");
// app.set('views', './views')

app.get('/', function(req, res){
    res.send("hello express!");
})

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
})