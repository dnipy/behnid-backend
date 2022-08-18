//libs
import express from "express";

//routes
import { AuthRoute } from "./Auth/Auth.js";
import { usersRoute } from "./users/users.js"
import {commentsRoute} from "./comments/comments.js"
import {chatRoute} from "./chat/chat.js"
import {mediaRoute} from "./media/media.js"
import {productsRoute} from "./products/products.js"
import {requestsRoute} from "./requests/requests.js"
import {categoriesRoute} from "./categories/categories.js"
import {connectionsRoute} from "./connections/connections.js"
import {BlogRoute} from "./blog/blog.js"
import {serverAssetsRoute} from "./serverAssets/serverAssets.js"
import {superAdminRoute} from "./superAdmin/superAdmin.js"
import {searchRoute} from "./search/search.js"
import {botRoute} from "./bot/bot.js"
import {sellersRoute} from "./sellers/sellers.js"
import {profileRoute} from "./profile/profile.js"

//initial router
const apiRoute = express.Router()

apiRoute.use('/Auth',AuthRoute)
apiRoute.use('/users',usersRoute)
apiRoute.use('/media',mediaRoute)
apiRoute.use('/chat',chatRoute)
apiRoute.use('/comments',commentsRoute)
apiRoute.use('/products',productsRoute)
apiRoute.use('/requests',requestsRoute)
apiRoute.use('/categories',categoriesRoute)
apiRoute.use('/connections',connectionsRoute)
apiRoute.use('/blog',BlogRoute)
apiRoute.use('/serverAssets',serverAssetsRoute)
apiRoute.use('/superAdmin',superAdminRoute)
apiRoute.use('/search',searchRoute)
apiRoute.use('/bot',botRoute)
apiRoute.use('/sellers',sellersRoute)
apiRoute.use('/profile',profileRoute)


apiRoute.get('/',(req,res)=>{
    res.send('/api/')
})


export {apiRoute}