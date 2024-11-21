

import express from 'express'
import { createCar } from './car.controller';



const router = express.Router();


router.post('/api/cars', createCar)


export const CarRoutes = router;

