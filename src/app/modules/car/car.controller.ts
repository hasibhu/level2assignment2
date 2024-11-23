import { Request, Response } from "express";
import { DeleteCarService, carService, getAllCarsService, getSingleCarFromDB, updateCarService } from "./car.service";
import { z } from "zod";
import { Types } from "mongoose";



// create car api 
export const createCar = async (req: Request, res: Response): Promise<void> => {
    try {
        // creating vlidtion wiht Zod
        const carValidationSchema = z.object({
            brand: z.string(),
            model: z.string(),
            year: z.number(),
            price: z.number(),
            category: z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"]),
            description: z.string(),
            quantity: z.number(),
            inStock: z.boolean(),    
        })


        const carData = req.body;
        

        // before zod 
        // const result = await carService(carData);
        
        // with zod  
        const zodParsedData = carValidationSchema.parse(carData)
        const result = await carService(zodParsedData);



        // send response
        res.status(200).json({
            success: true,
            message: 'Car data has been created successfully.',
            data: result
        })

    } catch (error: any) {
        if (error instanceof z.ZodError) {
        

        // Handle zod validation errors
        res.status(400).json({
            success: false,
            message: "Validation error.",
            details: error.errors.map((err) => ({
                path: err.path.join("."),
                message: err.message,
            })),
        });

    } else {
        // Handle other errors
         res.status(500).json({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

}

// get all car api 
export const getAllCarsController = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

      
      console.log("search terms in controller", searchTerm);
    // Call the service to get cars
    const cars = await getAllCarsService(searchTerm?.toString());

    res.status(200).json({
      message: "Cars retrieved successfully",
      status: true,
      data: cars,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Internal server error",
      status: false,
      error: error.message,
    });
  }
};


// get single car api

export const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    // Ensure carId is a valid ObjectId
    if (!Types.ObjectId.isValid(carId)) {
      return res.status(400).json({
        success: false,
        message: `Your given car ID ${carId} is Invalid`,
      });
    };


    const result = await getSingleCarFromDB(carId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Car not found with ID ${carId}`,
      });
    };

    res.status(200).json({
      success: true,
      message: "Car retrieved successfully.",
      data: result,
    });

  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// car info update api 
export const updateCarController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    // Validate car ID
    if (!Types.ObjectId.isValid(carId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid car ID",
      });
    };

    const updateData = req.body;

    // Ensure there's data to update
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No update data provided",
      });
    };

    const updatedCar = await updateCarService(carId, updateData);

    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    };

    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      data: updatedCar,
    });

  } catch (error : any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




// car info update api 
export const deleteCarController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    // Validate car ID
    if (!Types.ObjectId.isValid(carId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid car ID",
      });
    };


    const deletedCar = await DeleteCarService(carId);

    if (!deletedCar) {
      return res.status(404).json({
        success: false,
        message: "Car hs been not deleted.",
      });
    };

    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      data: deletedCar,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




