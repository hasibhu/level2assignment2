


import express from "express";
import { createOrderController } from "./order.controller";

const router = express.Router();

// Endpoint to create an order
router.post("/api/orders", createOrderController);

export const orderRoutes = router;
