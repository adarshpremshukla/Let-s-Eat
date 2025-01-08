const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

dotenv.config(); // Load environment variables

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(express.json()); // To parse incoming JSON requests

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api", orderRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
