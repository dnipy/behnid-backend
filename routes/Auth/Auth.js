import express from "express";
import { getRandomIntInclusive } from "../../funcs/RandomInt.js";
import jwt from 'jsonwebtoken'
import { VerifyNumber } from "../../funcs/VerifyPhone.js";
import {PrismaClient} from '@prisma/client'
import {config} from 'dotenv'
config()

const prisma = new PrismaClient;
const AuthRoute = express.Router()
var codeGen ;
var codeGenForgot ;



AuthRoute.get('/',(req,res)=>{
    console.log(process.env.ACCESS_TOKEN_SEC)
    res.send('/api/auth')
})


AuthRoute.post('/register',async(req,res)=>{
    const {phone} = req.body
    console.log(req.body)
    if (phone?.length != 11 ) return res.status(400).json({msg : 'wrong number'})

    const user = await prisma.user.findFirst({where:{phone : phone}})


    
    try {
        if (user != null) {
            return res.status(401).json({msg : 'user Exists'})
        }
        else{
            const code  = getRandomIntInclusive(100000,999999);
            VerifyNumber(phone,code)
            codeGen = code;
            res.json({code})
        }
    }
    catch {
        return (
            res.status(500).json({msg : 'err at sms panel'})
        )
    }

})

AuthRoute.post('/register-confirm',async(req,res)=>{
    const {phone,code,password} = req.body
    console.log(codeGen)

    if (phone?.length != 11) return res.status(400)
    if (code?.length != 6) return res.status(400)
    if (password?.length < 8) return res.json({msg : 'password under 8 length in not accepted!'})

    if (code == codeGen){
        const user =await prisma.user.create({data:{phone : phone , password : password}})
        console.log(user)
        const accessToken = jwt.sign({userPhone : phone},process.env.ACCESS_TOKEN_SEC)
        return res.status(200).json({accessToken})
    }

    console.log(codeGen,code)
})


AuthRoute.post('/forgot-password',async(req,res)=>{
    const {phone} = req.body
    if (phone?.length != 11) return res.json({msg: 'wrong nubmer'})

    const user = await prisma.user.findFirst({where:{phone : phone}})

    try {
        if (user == null) {
            return res.status(401).json({msg : 'user not Exists'})
        }
        const code = getRandomIntInclusive(100000,999999);
        codeGenForgot = code
        VerifyNumber(phone,code)
        res.json({code})
        
        
    }
    catch {
        return res.status(500)
    }

})

AuthRoute.post('/forgot-confirm',async(req,res)=>{
    const {phone,code,newPassword} = req.body
    console.log(codeGenForgot)

    if (phone?.length != 11) return res.status(400)
    if (code?.length != 6) return res.status(400)
    if (newPassword?.length < 8 ) return res.json({msg : 'password under 8 length in not accepted!'})

    const user = await prisma.user.findFirst({where : {phone : phone}})
    if (user == null) return res.json({msg : "user not exists"})



    try {
        if (code == codeGenForgot){
            const userUpdated = await prisma.user.update({where : {phone : phone},data : {password : newPassword}})
            console.log(userUpdated)
            const accessToken = jwt.sign({userPhone : phone},process.env.ACCESS_TOKEN_SEC)
            res.status(200).json({accessToken})
        }
    }
    catch {
        return res.status(500)
    }
    console.log(codeGenForgot,code)
})



AuthRoute.post('/get-new-token',async(req,res)=>{
    const {phone,password} = req.body
    
    if (phone?.length != 11) return res.status(400)
    if (password?.length < 8) return res.status(400)

    const user = await prisma.user.findFirst({where : {phone : phone ,password : password}})
    console.log(user)


    if (user == null) return res.json({msg : 'incorrect user info'})

    try {
        const accessToken = jwt.sign({userPhone : phone},process.env.ACCESS_TOKEN_SEC)
        return res.status(200).json({accessToken})
    }
    catch{
        return res.status(500)
    }
})


AuthRoute.post('/login',async(req,res)=>{
    const {phone,password} = req.body
    
    if (phone?.length != 11) return res.status(400)
    if (password?.length < 8) return res.status(400)

    const user = await prisma.user.findFirst({where : {phone : phone ,password : password}})
    console.log(user)


    if (user == null) return res.json({msg : 'incorrect user info'})

    try {
        const accessToken = jwt.sign({userPhone : phone},process.env.ACCESS_TOKEN_SEC)
        return res.status(200).json({accessToken})
    }
    catch{
        return res.status(500)
    }
})


export {AuthRoute}