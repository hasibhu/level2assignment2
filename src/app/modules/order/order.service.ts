import carModel from "../car/car.model";
import orderModel from "./order.model";
import { Order } from "./order.interface";

export const createOrderService = async (orderData: Omit<Order, "totalPrice">) => {

    
  const car = await carModel.findById(orderData.car);

  if (!car) {
    throw new Error("Car not found.");
  }


  if (car.quantity < orderData.quantity) {
    throw new Error("Insufficient stock available.");
  }


  const totalPrice = car.price * orderData.quantity;

  
  const order = await orderModel.create({
    ...orderData,
    totalPrice, 
  });

    
  
  car.quantity -= orderData.quantity;
  await car.save();

    
    
  return order;
};
