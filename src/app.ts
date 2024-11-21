

import express, { Application } from 'express'
import cors from 'cors'
const app : Application = express()


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to my car db')
})



export default app;


