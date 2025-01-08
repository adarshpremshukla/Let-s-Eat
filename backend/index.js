global.foodData = require('./db')(function call(err, data, CatData) {
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// for middleware
app.use(express.json())  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})


// const { fetchFoodData } = require('./db'); // Destructure to get the fetchFoodData function

// global.foodData = []; // Initialize the foodData global variable
// global.foodCategory = []; // Initialize the foodCategory global variable

// fetchFoodData()
//   .then(data => {
//     global.foodData = data.fooddata;
//     global.foodCategory = data.foodcategory;
//   })
//   .catch(err => {
//     console.error("Error fetching food data:", err);
//   });

// const express = require('express');
// const app = express();
// const port = 5000;

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// // Middleware
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use('/api/auth', require('./Routes/Auth'));

// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`);
// });







// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const path = require("path");


// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "http://localhost:3000",  // Allow your frontend URL
//   methods: "GET,POST,PUT,DELETE",  // Allowed methods
//   allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",  // Allowed headers
//   credentials: true,  // Allow credentials (cookies, authorization headers)
// };

// // Use CORS middleware with custom options
// app.use(cors(corsOptions));

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// // MongoDB connection function
// const mongodb = async () => {
//   const mongoURI = process.env.MONGO_URI;

//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Connected to MongoDB");

//     // Fetch data from MongoDB collections
//     const fooddata = mongoose.connection.db.collection("food_items");
//     const data = await fooddata.find({}).toArray();
//     global.fooddata = data;

//     const foodcategory = mongoose.connection.db.collection("foodcategory");
//     const fdata = await foodcategory.find({}).toArray();
//     global.foodcategory = fdata;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// };

// // Call the MongoDB connection function
// mongodb();

// // Your API routes here
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // Listen to incoming requests
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const { connectToDatabase, fetchFoodData } = require("./db");

// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "http://localhost:3000",
//   methods: "GET,POST,PUT,DELETE",
//   allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//   credentials: true,
// };

// // Use CORS middleware
// app.use(cors(corsOptions));

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// // Connect to the database
// connectToDatabase();

// // API route to fetch food data and categories
// app.get("/fooddata", async (req, res) => {
//   const { fooddata, foodcategory } = await fetchFoodData();
//   res.json({ fooddata, foodcategory });
// });

// // Default route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // Listen to incoming requests
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
