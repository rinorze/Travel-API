import express from "express";
import { createBooking } from "./booking.controller.js";

const router = express.Router();

router.post("/:id/booking", createBooking);
router.get("/myBookings");
router.delete("/:id/cancel");

export default router;
