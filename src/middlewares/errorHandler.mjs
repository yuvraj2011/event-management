const errorHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// eslint-disable-next-line no-unused-vars
export const globalErrorHandler = (error, req, res, _next) => {
  console.error(`Err in ${req.url}`, error);
  return res
    .status(error.status || 500)
    .json({ error: { success: false, message: error.message || 'An expected error occurred' } });
};

export default errorHandler;
