

import { Types } from "mongoose";
import carModel from "./car.model"
import Car from "./car.interface";


// create car api 
export const carService = async (carData: Car) => {
  const result = await carModel.create(carData);
  return result;
};

// get all car api 

export const getAllCarsService = async (searchTerm?: string) => {
    
  let query: any = {};


  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm.toString(), "i"); // Case-insensitive search
    query = {
      $or: [
        { brand: searchRegex },
        { model: searchRegex },
        { category: searchRegex },
      ],
    };
  }


  const cars = await carModel.find(query)
  return cars
};


// get single car api 

export const getSingleCarFromDB = async (_id: string) => {
  // Convert string ID to ObjectId
  return await carModel.findById(new Types.ObjectId(_id));
};


// update car information api

export const updateCarService = async (carId: string, newInfo: Partial<any>) => {
  
  const result = await carModel.findByIdAndUpdate(carId, newInfo, { new: true })

  return result;
};




// delete car information api

export const DeleteCarService = async (carId: string) => {
  
  const result = await carModel.findByIdAndDelete(carId)

  return result;
};






