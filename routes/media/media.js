import express from "express";

const mediaRoute = express.Router()

mediaRoute.get('/',(req,res)=>{
    res.send('/api/media')
})

export {mediaRoute}