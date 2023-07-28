const path = require("path");
const { mentorsData } = require("../model/mentors.model");
exports.mentors = (req, res) => {
  res.render("mentors", { mentorsData });
};

exports.mentorSelected = (req, res) => {
  console.log("Entered here");
  const { name, email } = req.body;

  console.log("Received mentor data:", { name, email });
};
