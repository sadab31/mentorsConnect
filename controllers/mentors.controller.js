const path = require("path");
const { mentorsData } = require("../model/mentors.model");
const Booking = require("../model/booking.model");

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

exports.bookSuccess = async (req, res) => {
  const booking = req.body;
  console.log("Entered bookingdets", booking);
  const { name, email, time, date } = req.body;

  // Create a new instance of the Booking model with the form data
  const newBooking = new Booking({
    name,
    email,
    time,
    date,
  });

  // Save the newBooking instance to the database
  await newBooking.save();
  res.render("bookingSuccess", { booking });
};
