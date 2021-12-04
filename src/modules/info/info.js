const names = [];// WHEN SERVER IS WORKING WE CAN STORE SOME DATA IN IT 
// WHEN SERVER STOP WORKING DATA DISAPPEAR. WE STORE DATA IN DATABASE

function info(req, res) {
  names.push(req.body.name);
  res.status(200).json(names);
  
}


module.exports = (info);