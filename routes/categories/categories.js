import express from "express";

const categoriesRoute = express.Router()

categoriesRoute.get('/',(req,res)=>{
    res.send('/api/categories')
})

export {categoriesRoute}