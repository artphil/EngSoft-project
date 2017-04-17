var express = require('express');
var fs = require('fs');

var app = express();

app.get('/listRooms', function(request, response) {
  fs.readFile(__dirname + '/rooms.json', 'utf8', function(err, data) {
    console.log(data);
    response.end(data);
  });
});

app.get('/roomDetail/:id', function (req, res) {
   fs.readFile( __dirname + '/rooms.json', 'utf8', function (err, data) {
       var rooms = JSON.parse(data),
           room = rooms[req.params.id] 
       res.end(JSON.stringify(room));
   });
});

var server = app.listen(80, function() {
  var host = server.address().address,
      port = server.address().port;

  console.log('Example app listening at http://' + host + ':' + port);
});
