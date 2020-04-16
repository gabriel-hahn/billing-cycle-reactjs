const handleProcessError = (res, data) => {
  const { status, message } = data.error;

  return res.status(status).json({ message });
};

module.exports = { handleProcessError };
