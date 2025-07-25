const Task = require('../models/Task');
const Event = require('../models/Event');
const User = require('../models/User');

exports.getTasksForEvent = async (req, res) => {
  try {
    const tasks = await Task.find({ event: req.params.eventId })
      .populate('assignedTo', 'name email')
      .populate('event', 'title');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.assignTask = async (req, res) => {
  const { title, description, requiredSkills } = req.body;

  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Find volunteers with matching skills who are attending the event
    const volunteers = await User.find({
      skills: { $in: requiredSkills },
      _id: { $in: event.attendees }
    });

    if (volunteers.length === 0) {
      return res.status(400).json({ message: 'No matching volunteers found for this task' });
    }

    const task = new Task({
      title,
      description,
      requiredSkills,
      event: event._id,
      assignedTo: volunteers[0]._id // Simple assignment - could be enhanced
    });

    await task.save();
    
    // Add task to event's task array
    event.tasks.push(task._id);
    await event.save();

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  const { status } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      { status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Remove task from event's task array
    await Event.findByIdAndUpdate(
      task.event,
      { $pull: { tasks: task._id } }
    );

    await task.remove();
    res.json({ message: 'Task removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};