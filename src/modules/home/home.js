
function home(req, res) {
  res.status(200).json({
    name:"Hello World",
    components: ["abx", "qwe", "abc"],
    q: true,

  });
}

module.exports = (home);