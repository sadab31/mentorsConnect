const express = require("express");
const {
  mentors,
  mentorSelected,
  bookSession,
} = require("../controllers/mentors.controller");

const router = express.Router();

router.get("/mentors", mentors);

router.post("/mentorSelected", mentorSelected);

router.get("/bookSession", bookSession);

module.exports = router;
