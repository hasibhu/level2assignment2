

import express, { Application } from 'express'
import cors from 'cors'
import { CarRoutes } from './app/modules/car/car.route';
import { orderRoutes } from './app/modules/order/order.route';
const app : Application = express()


app.use(express.json());
app.use(cors());


app.use('', CarRoutes)
app.use('', orderRoutes)

app.get('', (req, res) => {
  // res.send('Welcome to Car Store API ')
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Car Store API</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          font-weight: bold;
          text-align: center;
        }
      </style>
    </head>
    <body>
      Welcome to Car Store API
    </body>
    </html>
  `)
})



export default app;


