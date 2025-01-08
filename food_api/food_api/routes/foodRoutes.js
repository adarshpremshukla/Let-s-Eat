const express = require("express");
const {
  getFoodCategories,
  getFoodItemsByCategory,
} = require("../controllers/foodController");
const router = express.Router();
router.get("/items", getFoodItemsByCategory); // Route to get food items by category
router.get("/categories", getFoodCategories);
router.get("/food", getFoodItemsByCategory);

module.exports = router;
