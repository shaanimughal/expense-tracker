const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenses');

require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', expenseRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);