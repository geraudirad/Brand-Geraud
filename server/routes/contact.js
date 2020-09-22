const express = require("express")
const contactController = require("../controllers/contact");
const router = express.Router()

const {
    getAllContact,
    addNewContact
} = contactController;

// Get all contact
router.get("/", getAllContact)

// Add new contact
router.post("/", addNewContact)

module.exports = router