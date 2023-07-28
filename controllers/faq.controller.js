const path = require("path");
const { faqsData } = require("../model/faq.model");
exports.showFAQ = (req, res) => {
  res.render("faq", { faqsData });
};
