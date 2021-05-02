const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController")

router.post("/addContact", contactController.addContact);
router.get("/searchContact", contactController.searchContact);
router.delete("/deleteContact", contactController.deleteContact);
router.put("/updateContact", contactController.updateContact);

module.exports = router;