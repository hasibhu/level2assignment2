

import express, { RequestHandler } from 'express'
import { createCar, deleteCarController, getAllCarsController, getSingleCar, updateCarController } from './car.controller';



const router = express.Router();


router.post('/', createCar)

// get all cars  
router.get("/", getAllCarsController);

// id specific car
router.get('/:carId', getSingleCar as RequestHandler);


router.put("/:carId", updateCarController as RequestHandler);



router.delete("/:carId", deleteCarController as RequestHandler);






export const CarRoutes = router;

