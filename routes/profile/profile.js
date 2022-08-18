import express from "express";

const profileRoute = express.Router()

profileRoute.get('/',(req,res)=>{
    res.send('/api/profile')
})

export {profileRoute}