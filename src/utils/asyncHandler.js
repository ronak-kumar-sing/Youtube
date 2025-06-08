// Method 1: Using Promise.resolve (your current approach)
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err))
  }
}

// Method 2: Using try-catch with async/await (alternative approach)
const asyncHandlerAlt = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message
    })
  }
}

export { asyncHandler }