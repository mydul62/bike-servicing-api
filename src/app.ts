import {Application, Request,Response} from 'express'
import express from'express'
import cors from 'cors'
import { customerRoute } from './app/moudle/customers/customers.route';
import router from './app/routers';

const app:Application = express();
app.use(cors());
app.use(express.json()),
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')

})
app.use('/api',router)
export default app;