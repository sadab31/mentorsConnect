const path = require("path");
const { hiredData } = require("../model/hired.model");
exports.hired = (req, res) => {
  console.log("HiredData", hiredData);
  res.render("hired", { employees: hiredData }); // Pass hiredData as 'employees' variable to the EJS template
};
