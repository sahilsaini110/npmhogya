let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');





app.get("/", (req,res)=>{
    // res.send('Hello Express');
    res.sendFile( path.join(__dirname + 'views\index.html'));
});

bGround.log("Hello World");
console.log("Hello World");




































 module.exports = app;
