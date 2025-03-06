import express from "express";
import {
  createTour,
  getTours,
  getTourById,
  updateTour,
  deleteTour,
  addReview
} from "../tours/tour.controller.js";

const router = express.Router();

router.post("/", createTour);

router.get("/", getTours);

router.post("/:id/addReview", addReview);

router.get("/:id", getTourById);

router.put("/:id", updateTour);

router.delete("/:id", deleteTour);

export default router;
