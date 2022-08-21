import express from "express";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
const productsRoute = express.Router()

productsRoute.get('/',(req,res)=>{
    res.send('/api/products')
})

productsRoute.post('/add', async(req,res)=>{
    const {
        image,
        title,
        describe,
        price,
        sendArea,
        packingType,
        minOrder,
        customerPrice,
        producerPrice,
        weight,
        deliveryTime,
        catID,
        authorID,
        categories
    } = req.body

    try {
        const product = await prisma.product.create({
            data : {
                author : {
                    connect : {
                        id : 1
                    }
                },
                authorID : 2,
                title : '2wqd',
                customerPrice :232,
                describe : 'SADSD',
                deliveryTime : "3DAY",
                minOrder : 20,
                price : 399,
                producerPrice : 200 ,
                weight  : 29,

            }
        })

        return res.send(`product is = ${product}`)
    }

    catch(err){
        console.log('err 500')
        return res.send(err)
    } 

})

productsRoute.get('/all',async(req,res)=>{
    const {start,length} = req.query
    if (!start || !length) return res.json({msg : "need both start and length query-params!"})

    console.log(start,length)
    const IntLenght = parseInt(length)

    try {
        const products = await prisma.product.findMany({take : IntLenght})
        return  res.send(products)
    } 
    catch (error) {
        return res.send(error)
    }

})

productsRoute.delete('/delete',async(req,res)=>{
    const {id} = req.body
    const IntID = parseInt(id)

    try {
        await prisma.product.delete({
            where : {
                id : IntID
            }
        }).then(()=>{
            return res.send(`product with id => ${id} deleted`)
        })
    } 
    catch (error) {
        return res.send(error)
    }
})

export {productsRoute}