// Import required packages
import express from 'express';        // Web framework for creating REST APIs
import cors from 'cors';              // Cross-Origin Resource Sharing - allows frontend to call backend
import cookieParser from 'cookie-parser'; // Parses cookies from HTTP requests

// Create Express application instance
const app = express();

// CORS Configuration - Controls which domains can access your API
app.use(cors({
  origin: process.env.CORS_ORIGIN,    // Only allow requests from this domain (http://localhost:3000)
  credentials: true                   // Allow cookies and authorization headers in cross-origin requests
  // Without this, frontend can't send auth tokens or receive cookies
}))

// JSON Parser Middleware - Handles incoming JSON data
app.use(express.json({
  limit: '16kb'                      // Maximum JSON payload size (prevents DoS attacks)
  // Example: { "name": "John", "email": "john@email.com" }
}));

// URL-Encoded Parser - Handles HTML form submissions
app.use(express.urlencoded({
  extended: true,                    // Allow rich objects and arrays to be encoded
  limit: '16kb'                     // Maximum form data size
  // Example: name=John&email=john@email.com (from HTML forms)
}))

// Static File Serving - Serves files directly from 'public' folder
app.use(express.static('public'));
// Example: GET /avatar.jpg → serves ./public/avatar.jpg
// Used for: profile pictures, video thumbnails, uploaded files

// Cookie Parser - Makes cookies available as JavaScript objects
app.use(cookieParser())
// Converts: "token=abc123; userId=456"
// Into: req.cookies = { token: "abc123", userId: "456" }

// Export app to be used in other files (like index.js)
export { app };