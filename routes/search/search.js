import express from "express";

const searchRoute = express.Router()

searchRoute.get('/',(req,res)=>{
    res.send('/api/search')
})

export {searchRoute}