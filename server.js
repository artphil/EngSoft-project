var express = require('express'),
    fs = require('fs'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/listRooms', function(request, response) {
  fs.readFile(__dirname + '/rooms.json', 'utf8', function(err, data) {
    console.log(data);
    response.send(data);
  });
});

app.get('/roomDetail/:id', function (request, response) {
   fs.readFile( __dirname + '/rooms.json', 'utf8', function (err, data) {
       var rooms = JSON.parse(data),
           room = rooms[request.params.id];
       response.send(JSON.stringify(room));
   });
});

app.post('/addRoom', function(request, response) {
  var room = request.body;

  fs.readFile( __dirname + '/rooms.json', 'utf8', function (err, data) {
    var rooms = JSON.parse(data);

    console.log(room);

    if (rooms.hasOwnProperty(room.id)) {
      console.log('Room already exists');
      response.status(500).send({title: 'Respondido!', desc: 'Respondemos sua solicitação!'});
    } else {
      console.log('Including room ' + room.id);
      rooms[room.id] = room;
      fs.writeFile(__dirname + '/rooms.json', JSON.stringify(rooms));
      response.status(200).send();
    }
  });

});


var server = app.listen(80, function() {
  var host = server.address().address,
      port = server.address().port;

  console.log('Servidor do REPOUSO ativo em http://' + host + ':' + port);
});
