import express from "express";

const superAdminRoute = express.Router()

superAdminRoute.get('/',(req,res)=>{
    res.send('/api/superAdmin')
})

export {superAdminRoute}