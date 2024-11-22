import { Request, Response } from "express";
import { carService, getAllCarsService } from "./car.service";
import { z } from "zod";




export const createCar = async (req: Request, res: Response): Promise<void> => {
    try {


        // creating vlidtion wiht Zod
        const carValidationSchema = z.object({
            id: z.string(),
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

    } catch (error) {
        if (error instanceof z.ZodError) {
        

        // Handle zod validation errors
        return res.status(400).json({
            success: false,
            message: "Validation error.",
            details: error.errors.map((err) => ({
                path: err.path.join("."),
                message: err.message,
            })),
        });

    } else {
        // Handle other errors
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

}


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