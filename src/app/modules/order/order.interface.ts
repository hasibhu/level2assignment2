import { ObjectId } from "mongoose"



type Order = {
    email: string,
    car: ObjectId,
    quantity: number,
    totalPrice: number
}