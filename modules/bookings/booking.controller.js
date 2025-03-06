import Booking from "./booking.model.js";
import Tour from "../tours/tour.model.js";

export const createBooking = async (req, res) => {
  try {
    const tourId = req.params.id;
    const { guests, date, user } = req.body;

    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(400).json({ message: "Tour not found" });
    }

    const booking = new Booking({
      user,
      tour: tourId,
      guests,
      date
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};
