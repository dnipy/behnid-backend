import express from "express";

const requestsRoute = express.Router()

requestsRoute.get('/',(req,res)=>{
    res.send('/api/requests')
})

export {requestsRoute}