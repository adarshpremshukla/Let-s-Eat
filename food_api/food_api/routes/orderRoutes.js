const express = require("express");
const authenticate = require("../middleware/authenticate"); // Authentication middleware
const orderController = require("../controllers/orderController");
const foodController = require("../controllers/foodController");
const router = express.Router();

// Add a route to fetch the cart (order list)
router.get("/list", authenticate, orderController.getUserOrders);
// Route to place an order
router.post("/orderplace", authenticate, orderController.placeOrder);

// Route to get food data
router.get("/foodData", authenticate, foodController.getFoodData);

router.post("/add", authenticate, orderController.addToCart); // Route to add items to the cart
module.exports = router;
