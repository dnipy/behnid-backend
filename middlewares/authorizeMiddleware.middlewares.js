import jwt from "jsonwebtoken"
import {config} from 'dotenv'

config()

function authorizeMiddleware(req,res,next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token == null) return res.sendStatus(401)
    
    jwt.verify(token,process.env.ACCESS_TOKEN_SEC,(err,userData)=>{
        if(err) return res.sendStatus(403)
        req.userData = userData
        next()
    })
    
}

export {authorizeMiddleware}