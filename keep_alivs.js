ver http = require('http');

http.createserver(function (req, res) {
  res.write("I'm Alive");
  res.end();
)).listen(8000);
