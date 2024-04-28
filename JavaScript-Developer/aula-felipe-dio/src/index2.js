const express = require("express")
const path = require("path")

const app = express()
const rounter = express.Rounter()

rounter.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

rounter.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.user(rounter)

app.listen(3333, ()=>{
    console.log("servidor rodando a MIL")
})