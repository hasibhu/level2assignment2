import { Schema, model } from "mongoose";
import Car from "./car.interface";


const carSchema = new Schema<Car>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },

});


const carModel = model<Car>("Car", carSchema);

export default carModel;