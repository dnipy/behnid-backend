import express from "express";

const productsRoute = express.Router()

productsRoute.get('/',(req,res)=>{
    res.send('/api/products')
})

export {productsRoute}