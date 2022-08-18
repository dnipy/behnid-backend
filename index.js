// libs-Import
import express from "express"
import helmet from "helmet"
// import { Smsir } from "smsir-js"
import { indexController } from "./controllers/index.controllers.js"
// modules-Import
import { apiRoute } from "./routes/api.routes.js"
import { superAdminRoute } from "./routes/superadmin.routes.js"

// Inintials
const app = express()
const port =  process.env.PORT || 4000
app.use(express.json())
app.use(helmet())


// Routes 

//      #index#
app.get('/',indexController)

//      # api #
app.use('/api',apiRoute)

//      # super-admin #
app.use('/super-admin',superAdminRoute)



app.listen(port,()=>{
    console.log(`server started on port ${port}`)
}) 