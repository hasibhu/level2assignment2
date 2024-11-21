

import express, { Application } from 'express'
import cors from 'cors'
import { CarRoutes } from './app/modules/car/car.route';
const app : Application = express()


app.use(express.json());
app.use(cors());


app.use('/v1/app/', CarRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to my car db')
})



export default app;


