

import { Car } from "./car.interface";
import carModel from "./car.model"



export const carService = async (carData: Car) => {   
    const result = await carModel.create(carData);
    return result;
}





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





















 // use of the customised statics 
    // if (await carModel.isCarExists(carData.id)) {
    //     throw new Error('Car already exists');
    // }
      // end  of the customised statics 