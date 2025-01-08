const Order = require("../models/Order");
const Cart = require("../models/Cart");
const FoodItem = require("../models/FoodItem");

exports.addToCart = async (req, res) => {
  const { foodId, quantity } = req.body;
  const userEmail = req.user?.email; // Extract email from authenticated user

  if (!foodId || !quantity) {
    return res.status(400).json({ error: "foodId and quantity are required" });
  }

  try {
    // Log incoming request
    console.log(
      `Adding foodId: ${foodId}, quantity: ${quantity}, for user: ${userEmail}`
    );

    // Find user's cart
    let cart = await Cart.findOne({ userEmail });

    if (!cart) {
      console.log("Creating a new cart for the user");
      cart = new Cart({ userEmail, items: [] });
    }

    // Add item to cart
    cart.items.push({ foodId, quantity });
    await cart.save();

    res.status(200).json({ message: "Food added to cart successfully" });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserOrders = async (req, res) => {
  const userEmail = req.user?.email; // Extract email from the authenticated user

  try {
    // Fetch the user's cart
    const cart = await Cart.findOne({ userEmail }).populate("items.foodId");

    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: "No items found in the cart" });
    }

    res.status(200).json({ cart: cart.items }); // Return the items in the cart
  } catch (err) {
    console.error("Error fetching user orders:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.placeOrder = async (req, res) => {
  const userEmail = req.user?.email; // Extract email from the authenticated user

  try {
    // Fetch user's cart
    const cart = await Cart.findOne({ userEmail }).populate("items.foodId");

    if (!cart || cart.items.length === 0) {
      return res
        .status(400)
        .json({ error: "Cart is empty. Cannot place order." });
    }

    // Calculate total price
    let totalPrice = 0;
    cart.items.forEach((item) => {
      const foodOption = item.foodId.options.find(
        (option) => option[item.size] // Assuming "size" is part of the cart item
      );
      if (foodOption)
        totalPrice += parseInt(foodOption[item.size]) * item.quantity;
    });

    // Create new order
    const newOrder = new Order({
      userEmail,
      items: cart.items.map((item) => ({
        foodId: item.foodId._id,
        quantity: item.quantity,
      })),
      totalPrice,
    });

    await newOrder.save();

    // Clear the user's cart
    await Cart.deleteOne({ userEmail });

    res
      .status(201)
      .json({ message: "Order placed successfully!", order: newOrder });
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
