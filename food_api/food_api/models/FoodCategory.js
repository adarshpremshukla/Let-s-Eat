const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
});

const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema);
module.exports = FoodCategory;
