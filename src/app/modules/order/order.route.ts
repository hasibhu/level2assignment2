


import express from "express";
import { calculateRevenueController, createOrderController } from "./order.controller";

const router = express.Router();

// Endpoint to create an order
router.post("/api/orders", createOrderController);

router.get("/api/orders/revenue", calculateRevenueController);

export const orderRoutes = router;
