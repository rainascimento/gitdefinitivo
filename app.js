const express = require("express");

const app = express();

app.get("/",(req, res)=>{res.send("Hello caras")});


app.listen(3000, ()=>{console.log("App na porta 3000")});