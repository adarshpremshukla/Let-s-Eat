const mongoose = require("mongoose");
const FoodCategory = require("./models/FoodCategory");
const FoodItem = require("./models/FoodItem");
const foodCategoryData = require("./foodcategory.json");
const foodItemData = require("./fooditem.json");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    return FoodCategory.insertMany(foodCategoryData); // Import food categories
  })
  .then(() => {
    return FoodItem.insertMany(foodItemData); // Import food items
  })
  .then(() => {
    console.log("Data imported successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error importing data:", err);
    mongoose.connection.close();
  });
