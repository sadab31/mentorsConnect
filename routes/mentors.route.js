const express = require("express");
const {
  mentors,
  mentorSelected,
} = require("../controllers/mentors.controller");

const router = express.Router();

router.get("/mentors", mentors);

router.post("/mentorSelected", mentorSelected);

module.exports = router;
