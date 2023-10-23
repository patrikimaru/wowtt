const mongoose = require("mongoose");

const highlightSchema = new mongoose.Schema({
  highlightTitle: {
    type: String,
  },
  highlightDetails: {
    type: [String],
    required: true, 
  },
});

module.exports = highlightSchema;