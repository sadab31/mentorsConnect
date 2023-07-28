const path = require("path");
const { mentorsData } = require("../model/mentors.model");
exports.mentors = (req, res) => {
  res.render("mentors", { mentorsData });
};
