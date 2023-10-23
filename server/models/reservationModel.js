const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    tourId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    numberOfPerson: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);