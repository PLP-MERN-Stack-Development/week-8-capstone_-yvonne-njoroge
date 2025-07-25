const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Public routes
router.get("/", eventController.getEvents);
router.get("/:id", eventController.getEvent);

// Protected routes (require JWT)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["organizer", "admin"]),
  eventController.createEvent
);

router.post("/:id/join", authMiddleware, eventController.joinEvent);

module.exports = router;