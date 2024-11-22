import { Schema, model, Types } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        car: {
            type: Types.ObjectId, 
            required: true,
            ref: "Car", 
        },
        quantity: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
    },
    
    {
        timestamps: true,
        versionKey: false,
    }
);

const OrderModel = model<Order>("Order", orderSchema);
export default OrderModel;
