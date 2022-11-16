const handleError = (error, req, res, next) => {
  const { status, errorContent, message } = error;
  res.status(error).json({
    message,
    error: errorContent.message,
  });
}
module.exports = handleError;