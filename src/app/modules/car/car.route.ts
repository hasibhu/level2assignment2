

import express, { RequestHandler } from 'express'
import { createCar, deleteCarController, getAllCarsController, getSingleCar, updateCarController } from './car.controller';



const router = express.Router();

// create car 
router.post('/api/cars', createCar)

// get all cars  
router.get("/api/cars", getAllCarsController);

// id specific car
router.get('/:carId', getSingleCar as RequestHandler);

// update car 
router.put("/api/cars/:carId", updateCarController as RequestHandler);

// delete car info 
router.delete("/api/cars/:carId", deleteCarController as RequestHandler);






export const CarRoutes = router;

