const mongoose = require("mongoose");

const MeasurementSchema = mongoose.Schema(
  {
    display_cat: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Measurement", MeasurementSchema);
