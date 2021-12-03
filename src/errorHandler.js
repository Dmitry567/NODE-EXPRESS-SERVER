function apiNotFound(req, res) {
  res.status(400).json("API not found");//Instead of send we will use json(400).send
}

module.exports = function errorHandler(app)  {
  app.use(apiNotFound);
};