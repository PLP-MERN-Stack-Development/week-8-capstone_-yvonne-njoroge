const Event = require("../models/Event");

// Create an event (Organizer only)
exports.createEvent = async (req, res) => {
  const { title, description, date, location, tags } = req.body;

  try {
    const event = new Event({
      title,
      description,
      date,
      location,
      tags,
      createdBy: req.user.id,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Join an event (Volunteer)
exports.joinEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Check if already joined
    if (event.attendees.includes(req.user.id)) {
      return res.status(400).json({ message: "Already joined this event" });
    }

    event.attendees.push(req.user.id);
    await event.save();

    res.json({ message: "Successfully joined the event" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};