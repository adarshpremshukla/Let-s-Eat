
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