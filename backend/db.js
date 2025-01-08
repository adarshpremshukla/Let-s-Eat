
const mongoose = require("mongoose");

const mongodb = async () => {
  const mongoURI =
    "mongodb://127.0.0.1:27017/gofoodmern?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";

  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fooddata =  mongoose.connection.db.collection("food_items");
    const data = await fooddata.find({}).toArray();
    global.fooddata = data;

    const foodcategory = mongoose.connection.db.collection("foodcategory");
    const fdata = await foodcategory.find({}).toArray();
    global.foodcategory = fdata;

     } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
module.exports = mongodb;





// const mongoose = require("mongoose");

// const mongodb = async () => {
//   const mongoURI = process.env.MONGO_URI;

//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Connected to MongoDB");

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

// module.exports = mongodb;








// require('dotenv').config();
// const mongoose = require("mongoose");

// // MongoDB connection function
// const connectToDatabase = async () => {
//   const mongoURI = process.env.MONGO_URI;

//   try {
//     // Connect to MongoDB using the URI from the .env file
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("Connected to MongoDB");

//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Gracefully exit if connection fails
//   }
// };

// // Function to get food data and categories from the database
// const fetchFoodData = async () => {
//   try {
//     const fooddata = await mongoose.connection.db.collection("food_items").find({}).toArray();
//     const foodcategory = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
    
//     return { fooddata, foodcategory };

//   } catch (error) {
//     console.error("Error fetching data from MongoDB:", error.message);
//     return { fooddata: [], foodcategory: [] };
//   }
// };

// module.exports = { connectToDatabase, fetchFoodData };





