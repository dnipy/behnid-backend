import express from "express";

const connectionsRoute = express.Router()

connectionsRoute.get('/',(req,res)=>{
    res.send('/api/blog')
})

export {connectionsRoute}