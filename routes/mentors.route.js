const express = require("express");
const { mentors } = require("../controllers/mentors.controller");

const router = express.Router();

router.get("/mentors", mentors);

module.exports = router;
