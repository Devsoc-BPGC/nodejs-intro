const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Connect to database
const connectDB = require('./config/db');
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// Import routers
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

// Set up routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
