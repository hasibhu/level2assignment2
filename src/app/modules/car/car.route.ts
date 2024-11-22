

import express from 'express'
import { createCar, getAllCarsController } from './car.controller';



const router = express.Router();


router.post('/api/cars', createCar)

// get all cars  
router.get("/api/cars", getAllCarsController);


export const CarRoutes = router;

