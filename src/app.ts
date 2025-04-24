import {Application, NextFunction, Request,Response} from 'express'
import express from'express'
import cors from 'cors'
import { customerRoute } from './app/moudle/customers/customers.route';
import router from './app/routers';
import { GlobalErrorHandle } from './app/Middlewere/globalErrorHandle';

const app:Application = express();
app.use(cors());
app.use(express.json()),
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')

})
app.use('/api',router)
app.use(GlobalErrorHandle)



app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({
        success:false,
        message:"This Route Not Found",
        error:{
            path:req.originalUrl,
            message:"You Requested Path Not Found!!!"
        }
    })
})
export default app;