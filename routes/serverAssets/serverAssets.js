import express from "express";

const serverAssetsRoute = express.Router()

serverAssetsRoute.get('/',(req,res)=>{
    res.send('/api/serverAssets')
})

export {serverAssetsRoute}