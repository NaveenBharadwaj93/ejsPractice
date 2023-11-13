import express from "express";

const app = express();

// set up ejs
    // npm i ejs
    // app.set("view engine", "ejs")
    // create views folder
    // create views files
    // use res.render for routes

// set up express static
    // app.use(express.static('./public')) -> point it to public folder.  

app.set("view engine","ejs")
app.use(express.static('./public'))

// app.use(function (req,res,next) {
//     // req.url = "hello"
//     next();
// })

app.get('/',(req,res)=>{
    res.render("example")
})

app.get('/:username',(req,res)=>{
    // res.send(`url is catching up with ${req.params.username}`)
    res.render("params",{params:`${req.params.username}`})
})

app.listen(8080)