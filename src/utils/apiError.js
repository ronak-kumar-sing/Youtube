class ApiError extends Error {

  //constructor(){}
  constructor(
    statusCode,                           // HTTP status code (400, 401, 404, 500, etc.)
    message = "Something went wrong",     // Error message to display
    errors = [],                          // Array of detailed error objects
    stack = ""                           // Stack trace (optional)
  ) {
    // Call parent Error constructor with message
    super(message)

    // Custom properties for API responses
    this.statusCode = statusCode          // HTTP status code
    this.data = null                      // Always null for errors
    this.message = message                // message
    this.success = false                  // Always false for errors
    this.errors = errors                  // Detailed validation errors

    // Handle stack trace
    if (stack) {
      this.stack = stack                  // Use provided stack trace
    } else {
      // Capture current stack trace, excluding this constructor
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
// ?  Validation Error:
// * throw new ApiError(400, "Validation failed", [
// *   { field: "email", message: "Email is required" },
// *   { field: "password", message: "Password must be 8+ characters" }
// * ])



export { ApiError }