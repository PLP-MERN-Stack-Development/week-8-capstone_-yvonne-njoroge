const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// @route   GET api/tasks/:eventId
// @desc    Get tasks for an event
// @access  Private
router.get('/:eventId', authMiddleware, taskController.getTasksForEvent);

// @route   POST api/tasks/:eventId
// @desc    Create a new task for an event
// @access  Private (Organizer/Admin only)
router.post(
  '/:eventId',
  authMiddleware,
  roleMiddleware(['organizer', 'admin']),
  taskController.assignTask
);

// @route   PUT api/tasks/:taskId
// @desc    Update task status
// @access  Private
router.put('/:taskId', authMiddleware, taskController.updateTask);

// @route   DELETE api/tasks/:taskId
// @desc    Delete a task
// @access  Private (Organizer/Admin only)
router.delete(
  '/:taskId',
  authMiddleware,
  roleMiddleware(['organizer', 'admin']),
  taskController.deleteTask
);

module.exports = router;