import express from "express";
import bodyParser from "body-Parser";
import {port} from "./deployConfig.js"
import {Rout} from "./router.js"

const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))

app.use("/", Rout)

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
})

