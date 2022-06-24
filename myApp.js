let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');





app.get("/", (req,res)=>{
    res.send('Hello Express');
});

bGround.log("Hello World");
console.log("Hello World");




































 module.exports = app;
