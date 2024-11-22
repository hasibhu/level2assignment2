

import express from 'express'
import { createCar, getAllCarsController, getSingleCar } from './car.controller';



const router = express.Router();


router.post('/api/cars', createCar)

// get all cars  
router.get("/api/cars", getAllCarsController);

// id specific car 
    
router.get('/:carId', getSingleCar);









export const CarRoutes = router;

