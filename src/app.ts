

import express, { Application } from 'express'
import cors from 'cors'
import { CarRoutes } from './app/modules/car/car.route';
import { orderRoutes } from './app/modules/order/order.route';
const app : Application = express()


app.use(express.json());
app.use(cors());


app.use('', CarRoutes)
app.use('', orderRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Car Store API ')
})



export default app;


