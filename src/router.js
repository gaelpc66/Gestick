import express from "express";
const {pathname: root} = new URL('..', import.meta.url)

const rout = express.Router();

rout.get("/", (req,res)=>{
    res.sendFile("/public/index.html",{root:"."})
})

export const Rout = rout;
