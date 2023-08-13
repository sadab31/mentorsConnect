const express = require("express");
const app = express();
const PORT = 3002;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const faqRouter = require("./routes/faq.route");
const mentorsRouter = require("./routes/mentors.route");
const hiredRouter = require("./routes/hired.route");
const roadmapRouter = require("./routes/roadmap.route");

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(faqRouter);
app.use(mentorsRouter);
app.use(hiredRouter);
app.use(roadmapRouter);

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jobPlatform");
    console.log("DB connected");
  } catch (error) {
    console.log("DB not connected");
  }
};

app.listen(PORT, async () => {
  console.log(`server is running http://localhost:${PORT}`);
  await connectDB();
});
