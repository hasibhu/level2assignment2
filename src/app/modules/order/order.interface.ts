import { ObjectId, Types } from "mongoose";




export interface Order  {
  email: string;
  car: Types.ObjectId; 
  quantity: number;
  totalPrice?: number;
};
