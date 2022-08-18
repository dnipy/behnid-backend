//libs
import express from "express";

//routes

//initial router
const superAdminRoute = express.Router()



superAdminRoute.get('/',(req,res)=>{
    res.send('/super-admin/')
})


export {superAdminRoute}