import express from "express";

const BlogRoute = express.Router()

BlogRoute.get('/',(req,res)=>{
    res.send('/api/blog')
})

export {BlogRoute}