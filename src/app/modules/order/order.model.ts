import { Schema, model, Types } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>(
    {
        email: {
            type: String,
            required: true,
        },
        car: {
            type: Schema.Types.ObjectId, 
            required: true,
            ref: "Car", 
        },
        quantity: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number
        },
    },
    
    {
        timestamps: true,
        versionKey: false,
    }
);

const OrderModel = model<Order>("Order", orderSchema);
export default OrderModel;
