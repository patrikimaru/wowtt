const mongoose = require("mongoose");
const highlightSchema = require("./highlightModel.js");

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: [String],
      required: true,
    },
    highlight: [highlightSchema],
    included: {
      type: [String],
      required: true,
    },
    excluded: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    }, 
    isAvailable: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);