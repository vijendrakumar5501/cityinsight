const mongoose = require("mongoose");

const cityDetailSchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  state: { type: String, required: true },
  famousPlace: { type: String, required: true },
  famousFood: { type: String, required: true },
  famousTemple: { type: String, required: true },
  budget: { type: String, required: true },
  image: { type: String, required: true },
});

const CityDetail = mongoose.model("CityDetail", cityDetailSchema);

module.exports = CityDetail;
