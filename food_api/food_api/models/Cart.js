const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // To identify the user's cart
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
        required: true,
      }, // Reference to FoodItem
      quantity: { type: Number, required: true }, // Quantity of the item
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
