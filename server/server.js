const express = require('express');
const connectDB = require('./config/db');
const { port } = require('./config/env');
const errorHandler = require('./utils/errorHandler');
const swaggerConfig = require('./swagger');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

// Swagger Docs
swaggerConfig(app);

// Error Handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});