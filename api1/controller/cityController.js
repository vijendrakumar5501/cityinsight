const CityDetail = require("../models/cityModel");



exports.addCity = async (req, res) => {
  try {
    const { cityName, state, famousPlace, famousFood, famousTemple, budget } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const image = `/uploads/${req.file.originalname}`; // Use original filename

    const newCityDetail = new CityDetail({
      cityName,
      state,
      famousPlace,
      famousFood,
      famousTemple,
      budget,
      image,
    });

    const existingCity = await CityDetail.findOne({ cityName });

    if (existingCity) {
      return res.status(400).json({ 
        message: 'City already exists', 
        success: false 
      });
    }

    await newCityDetail.save();
    res.status(200).json({ message: "City details added successfully", city: newCityDetail });
    // console.log(res.json())
  } catch (error) {
    console.error("Error saving city details:", error);
    res.status(500).json({ message: "Error adding city details", error: error.message });
  }
};

exports.getAllCity=async(req,res)=>{
  try {
      const cityDetails=await CityDetail.find();
      res.json(cityDetails)
  } catch (error) {
      console.log('Error fetchoing city detail',error);
      res.status(500).json({error:'internal server error'})
  }
};



