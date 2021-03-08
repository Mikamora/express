let express = require("express");
let path = require("path");
let app = express(); 

app.use((req, res, next) => {
    console.log(req.url);
    next();
})
app.get("/", (req, res)=>{
    res.send("Hello from the web server side"); 
})

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);