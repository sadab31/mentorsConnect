const express = require("express");
const app = express();
const PORT = 3002;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const faqRouter = require("./routes/faq.route");
const mentorsRouter = require("./routes/mentors.route");
const hiredRouter = require("./routes/hired.route");
const roadmapRouter = require("./routes/roadmap.route");

const Mentor = require("./model/mentors.model");
const { mentorsData } = require("./DummyData/dummy");
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

async function insertMentorsData() {
  try {
    await Mentor.deleteMany(); // Clear existing data (optional)

    for (const mentorData of mentorsData) {
      const newMentor = new Mentor(mentorData);
      await newMentor.save();
    }

    console.log("Mentors data inserted successfully");
  } catch (error) {
    console.error("Error inserting mentors data:", error);
  }
}

insertMentorsData();

var khaledErData = [
  "Software Engineer",
  "Marketer",
  "Civil Engineer",
  "Data Scientist",
  "Graphic Designer",
];

app.get("/", (req, res) => {
  res.render("khaledBryan", { data: khaledErData });
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
