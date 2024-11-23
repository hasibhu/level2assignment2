

import express from 'express'
import { createCar, deleteCarController, getAllCarsController, getSingleCar, updateCarController } from './car.controller';



const router = express.Router();


router.post('/api/cars', createCar)

// get all cars  
router.get("/api/cars", getAllCarsController);

// id specific car
router.get('/api/cars/:carId', getSingleCar);


router.put("/api/cars/:carId", updateCarController);



router.delete("/api/cars/:carId", deleteCarController);






export const CarRoutes = router;

