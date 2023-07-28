const express = require("express");
const app = express();
const PORT = 3002;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const faqRouter = require("./routes/faq.route");
const mentorsRouter = require("./routes/mentors.route");

app.use(bodyParser.json());
app.use(faqRouter);
app.use(mentorsRouter);

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/usersDB");
    console.log("DB connected");
  } catch (error) {
    console.log("DB not connected");
  }
};

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    reuired: true,
  },
  description: {
    type: String,
    reuired: true,
  },
  price: {
    type: Number,
    reuired: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Products", productSchema);

app.listen(PORT, async () => {
  console.log(`server is running http://localhost:${PORT}`);
  await connectDB();
});
