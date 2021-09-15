require('dotenv').config()
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// --> 7)  Mount the Logger middleware here
app.use(logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false }))

/** 1) Meet the node console. */
//app.get("/", (req, res) => res.json({ message: "Hello Express" }))

/** 2) A first working Express Server */

/*app.get("/",(req,res) => {
    res.send("Hello Express")
})*/
/** 3) Serve an HTML file */

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

/** 4) Serve static assets  */

app.use(express.static(__dirname + "/public"))

/** 5) serve JSON on a specific route */

/** 6) Use the .env file to configure the app */
app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message2 = "HELLO JSON"
        return res.json({ "message": message2 })
    }
    else {
        return res.json({ "message": "Hello json" })
    }
});

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next()
    res.json({ time: req.time });
})

/** 9)  Get input from client - Route parameters */

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
})


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get('/name', (req, res,) => {
    res.json({ name: `${req.query.first} ${req.query.last}` })
})

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */
app.post('/name', (req, res) => {  
    res.json({ name: `${req.body.first} ${req.body.last}` })
})
// Think about what the "body" of the request is.  this will be important down the road as you deal with APIs more.  The body of the request is usually a json object that carries information from the request...in this case, the user input information in the form and when they hit the submit button, it sent that information to your API and hit line 77... The request object... "req" on line 77 is {"first": "John", "last": "Doe"}...you're accessing this JSON object on line 78 and sending a response to the user withe the first and last name....what's in the browser is currently "Taco TacoTaco" the first and last name..you accessed this information on line 79 by referencing the "body" attribute of the request object "req" so ...req.body.first is the first name and req.body.last is the last name.....




// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
