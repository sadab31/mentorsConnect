const path = require("path");
const { roadmapsData } = require("../model/roadmap.model");

exports.roadmap = (req, res) => {
  res.render("roadmap", { roadmapsData });
};
