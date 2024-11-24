import carModel from "../car/car.model";
import OrderModel from "./order.model";
import { Order } from "./order.interface";


// export const createOrderService = async (orderData: Omit<Order, "totalPrice">) => {

    
//   const car = await carModel.findById(orderData.car);

//   if (!car) {
//     throw new Error("Car not found.");
//   }


//   if (car.quantity < orderData.quantity) {
//     throw new Error("Insufficient stock available.");
//   }


//   const totalPrice = car.price * orderData.quantity;

  
//   const order = await OrderModel.create({
//     ...orderData,
//     totalPrice, 
//   });

    
  
//   car.quantity -= orderData.quantity;
//   await car.save();

    
    
//   return order;
// };



// service api for revenue 

export const createOrderService = async (orderData: Omit<Order, "totalPrice">) => {
  // Fetch the car by ID
  const car = await carModel.findById(orderData.car);

  // Handle car not found case
  if (!car) {
    throw new Error("Car not found.");
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




export const calculateRevenueService = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  // Log aggregation result for debugging
  console.log("Aggregation Result:", result);

  return result.length > 0 ? result[0].totalRevenue : 0;
};


