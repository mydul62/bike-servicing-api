import { Router } from "express";
import { customerRoute } from "../moudle/customers/customers.route";
const router = Router()

const AllRoutes =[
    {
        path:'/customers',
        route: customerRoute
    },
   
]
AllRoutes.forEach((item)=>router.use(item.path, item.route))
export default router