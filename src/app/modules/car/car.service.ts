

import { Types } from "mongoose";
import { Car } from "./car.interface";
import carModel from "./car.model"


// create car api 
export const carService = async (carData: Car) => {   
    const result = await carModel.create(carData);
    return result;
}



// get all car api 

export const getAllCarsService = async (searchTerm?: string)=>{
    
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
}





// get single car api 

export const getSingleCarFromDB = async (_id: string) => {
  // Convert string ID to ObjectId
  return await carModel.findById(new Types.ObjectId(_id));
};









