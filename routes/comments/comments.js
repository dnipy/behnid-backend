import express from "express";

const commentsRoute = express.Router()

commentsRoute.get('/',(req,res)=>{
    res.send('/api/comments')
})

export {commentsRoute}