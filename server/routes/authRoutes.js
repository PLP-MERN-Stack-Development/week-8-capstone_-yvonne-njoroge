const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidation } = require('../utils/validate');

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerValidation, authController.register);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', authController.login);

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', authController.getMe);

module.exports = router;