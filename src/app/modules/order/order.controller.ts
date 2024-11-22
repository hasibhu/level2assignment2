import { Request, Response } from "express";
import { createOrderService, getAllCarsService } from "./order.service";
import { z } from "zod";
import { ObjectId, Types } from "mongoose";
import { Order } from "./order.interface";

export const createOrderController = async (req: Request, res: Response) => {
  try {
   
    const orderValidationSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      car: z.string(), 
      quantity: z.number().min(1, "Quantity must be at least 1."),
    });
      

   
      const validatedOrderData = orderValidationSchema.parse(req.body);
      
  
    const orderData: Omit<Order, "totalPrice"> = {
        ...validatedOrderData,
        car: new Types.ObjectId(validatedOrderData.car), 
    };
      
     

    const order = await createOrderService(orderData);

      
    res.status(201).json({
      success: true,
      message: "Order created successfully.",
      data: order,
    });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: "Validation error.",
                errors: error.errors.map((err) => ({
                path: err.path.join("."),
                message: err.message,
                })),
            });
        }

    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error.",
    });
  }
};



