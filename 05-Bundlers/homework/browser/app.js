//(function () {

  //var whiteboard = window.whiteboard;
  var whiteboard = require('./whiteboard');

  //var socket = window.io(window.location.origin); // primero nos traemos window.io y despues crear una variable ejecutando eso que nos trajimos
  var io = require('socket.io-client'); // 1ro. -> me traigo lo que exporta este paquete
  var socket = io(window.location.origin); // ejecuto lo que me traje con el argumento anteriormente mencionado


  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

//})();
