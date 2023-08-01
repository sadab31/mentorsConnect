const path = require("path");
const { mentorsData } = require("../model/mentors.model");
exports.mentors = (req, res) => {
  res.render("mentors", { mentorsData });
};

exports.mentorSelected = (req, res) => {
  console.log("Entered here");
  const mentorsData = req.body;

  console.log("Received mentor data:", mentorsData);

  res.render("mentorSelected", { mentorsData });
};

exports.bookSession = (req, res) => {
  const mentorName = req.query.mentorName;
  console.log("mentorNameeeeeeee", mentorName);
  console.log("Entered booked session");
  res.render("bookSession", { mentorName });
};
exports.bookSuccess = (req, res) => {
  const booking = req.body;
  console.log("Entered bookingdets", booking);
  res.render("bookingSuccess", { booking });
};
