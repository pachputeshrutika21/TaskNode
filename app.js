var express = require('express');
var app = express();
app.set('port',process.env.PORT || 7700);
app.get('/', function (req, res) {
  res.send('Welcome!!!!');
});
const server=app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${server.address().port}`);
});
