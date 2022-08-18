import express from "express";

const chatRoute = express.Router()

chatRoute.get('/',(req,res)=>{
    res.send('/api/chat')
})

export {chatRoute}