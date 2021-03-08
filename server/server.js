let express = require("express");
let path = require("path");
let fs = require("fs");
let bodyParser = require("body-parser");
let app = express(); 


//step1

// app.get("/", (req, res)=>{
//     res.send("Hello from the web server side"); 
// })

//step3

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/formsubmissions", (req, res, next)=> {
    console.log(req.body.email);
    console.log(req.body.name); 
    fs.appendFileSync("form.json", `{ "Email": "${req.body.email}",\n "Name": "${req.body.name}" }`); 
    res.send(`Name: ${req.body.name}\n Email: ${req.body.email}`)
    next();
})

//step2

app.use((req, res, next) => {
    console.log(req.url);
    next();
})


app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);