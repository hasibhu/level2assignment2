


import express, { RequestHandler } from "express";
import { calculateRevenueController, createOrderController } from "./order.controller";

const router = express.Router();

// Endpoint to create an order
router.post("/api/orders", createOrderController as RequestHandler);

// Endpoint to see whole revenue
router.get("/api/orders/revenue", calculateRevenueController as RequestHandler);



export const orderRoutes = router;
