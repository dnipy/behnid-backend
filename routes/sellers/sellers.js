import express from "express";

const sellersRoute = express.Router()

sellersRoute.get('/',(req,res)=>{
    res.send('/api/sellers')
})

export {sellersRoute}