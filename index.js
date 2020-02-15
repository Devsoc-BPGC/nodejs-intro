const express = require('express');
const app = express();
const morgan = require('morgan');

// Middleware
app.use(morgan('dev'));

// Import routers
const postRoutes = require('./routes/posts');

// Set up routes
app.use('/posts', postRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
