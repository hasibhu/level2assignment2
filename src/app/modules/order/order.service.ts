import carModel from "../car/car.model";
import OrderModel from "./order.model";
import { Order } from "./order.interface";

// order creating service 
export const createOrderService = async (orderData: Omit<Order, "totalPrice">) => {
  // Fetch the car by ID
  const car = await carModel.findById(orderData.car);

  // Handle car not found case
  if (!car) {
    throw new Error("Car is not found.");
  }

  // Check if sufficient stock is available
  if (car.quantity < orderData.quantity) {
    throw new Error("Insufficient stock available.");
  }

  // Calculate the total price for the order
  const totalPrice = car.price * orderData.quantity;

  // Create the order
  const order = await OrderModel.create({
    ...orderData,
    totalPrice,
  });

  // Update the car's quantity and inStock status
  car.quantity -= orderData.quantity;

  if (car.quantity <= 0) {
    car.inStock = false; // Set inStock to false if quantity is 0
  }

  // Save the updated car document
  await car.save();

  return order;
};



// revenue extracting  service 
export const calculateRevenueService = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);



  return result.length > 0 ? result[0].totalRevenue : 0;
};


