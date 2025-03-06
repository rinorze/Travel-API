import express from "express";
import userRoutes from "../modules/users/users.routes.js";
import tourRoutes from "../modules/tours/tours.routes.js";
import bookingRoutes from "../modules/bookings/booking.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/tours", tourRoutes);
router.use("/bookings", bookingRoutes);

export default router;
