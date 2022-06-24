let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');


app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res)=>{
    res.json({"message": "Hello json"});
});

bGround.log("Hello World");
console.log("Hello World");




































 module.exports = app;
