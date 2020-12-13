const express = require("express");
const router = express.Router();

const siteController = require("../app/SiteController.js");

router.use("/search", siteController.search);
router.use("/", siteController.home);

module.exports = router;
