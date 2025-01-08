// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   foodItems: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "FoodItem",
//       required: true,
//     },
//   ],
//   orderDate: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Order = mongoose.model("Order", orderSchema);
// module.exports = Order;

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // Email of the user placing the order
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true }, // Total cost of the order
  status: { type: String, default: "Pending" }, // Order status
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model("Order", orderSchema);
