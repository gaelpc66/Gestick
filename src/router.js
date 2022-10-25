import express from "express";
const rout = express.Router;

Router.get("/", (req,res)=>{
    res.send("..//public/index.html")
})

export const Rout = rout;
