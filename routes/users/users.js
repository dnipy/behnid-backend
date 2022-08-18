import express from "express";
import { getRandomIntInclusive } from "../../funcs/RandomInt.js";
import jwt from 'jsonwebtoken'
import {PrismaClient} from '@prisma/client'
import {config} from 'dotenv'
config()

const usersRoute = express.Router()

usersRoute.get('/',(req,res)=>{
    res.send('/api/users')
})



usersRoute.get('/all',async(req,res)=>{
    const {start,length} = req.query

    if (!start || !length) return res.json({msg : "need both start and length query-params!"})

    return res.json({start,length})
})





// usersRoute.get('/all',async(req,res)=>{})
// usersRoute.get('/all',async(req,res)=>{})
// usersRoute.get('/all',async(req,res)=>{})
// usersRoute.get('/all',async(req,res)=>{})



export {usersRoute}