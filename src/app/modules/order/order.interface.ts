import { ObjectId } from "mongoose";




export type Order = {
  id: string;
  email: string;
  car: ObjectId; 
  quantity: number;
  totalPrice: number;
};
