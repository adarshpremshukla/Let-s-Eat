const FoodCategory = require("../models/FoodCategory");
const FoodItem = require("../models/FoodItem");

// Get all food categories
exports.getFoodCategories = async (req, res) => {
  try {
    const categories = await FoodCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to get food items by category
exports.getFoodItemsByCategory = async (req, res) => {
  const { category } = req.query; // Get category from query parameter
  try {
    const foodItems = await FoodItem.find({ CategoryName: category }); // Find food items by category
    if (!foodItems.length) {
      return res
        .status(404)
        .json({ error: "No food items found for this category" });
    }
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFoodData = async (req, res) => {
  try {
    // Fetch all food items from the database
    const foodItems = await FoodItem.find();

    if (!foodItems || foodItems.length === 0) {
      return res.status(404).json({ message: "No food data found" });
    }

    // Return the list of food items
    res.status(200).json({ foodItems });
  } catch (err) {
    console.error("Error fetching food data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
