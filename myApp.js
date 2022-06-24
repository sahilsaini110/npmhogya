let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');





app.get("/", ()=>{
    bGround.log("Hello Express")
})

bGround.log("Hello World");




































 module.exports = app;
