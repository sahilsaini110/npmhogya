let express = require('express');
let app = express();
let bGround = require('fcc-express-bground');
var bodyParser = require('body-parser');
const { application } = require('express');
require('dotenv').config();


// middleware to work on all route create it on top
app.use(function(req, res, next){
    console.log(req.method+" "+req.path+" "+"-"+" "+req.ip)
    next();
});


// bodyParser Middleware(parse application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({extended: false}))
//  parse application/json 
app.use(bodyParser.json())


// use to link static files such as css
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
});

// chained middleware 

app.get('/now', (req, res, next)=>{
    req.time = new Date().toString();
    next();
}, (req, res)=>{
    res.json(
        {"time" : req.time}
    );
});


// route parameters 
app.get("/:word/echo", (req, res) =>{
    res.json(
        {echo: req.params.word}
    );
});
 

// query parameters The query string is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&).
app.get("/name", (req, res) =>{
    console.log(req.query)
    res.json(
        {name: req.query.first + " " + req.query.last}   
    );
});


// Use body-parser to Parse POST Requests 


// app.get('/json', (req, res)=>{
//     res.json({"message": "Hello json"});
// });


app.get('/json', function(req, res) {
    // console.log(process.env.MESSAGE_STYLE, "<=see this");
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json(
            {"message": "HELLO JSON"}
        )
    } else {
        res.json(
            {"message": "Hello json"}
        )
    }
});
   

bGround.log("Hello World");
console.log("Hello World");




































 module.exports = app;
