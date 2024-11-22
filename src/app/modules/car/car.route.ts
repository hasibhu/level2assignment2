

import express from 'express'
import { createCar, deleteCarController, getAllCarsController, getSingleCar, updateCarController } from './car.controller';



const router = express.Router();


router.post('/api/cars', createCar)

// get all cars  
router.get("/api/cars", getAllCarsController);

// id specific car 
    
router.get('/:carId', getSingleCar);


router.put("/:carId", updateCarController);



router.delete("/:carId", deleteCarController);






export const CarRoutes = router;

