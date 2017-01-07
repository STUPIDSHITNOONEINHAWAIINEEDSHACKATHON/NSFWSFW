const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

  app.use(bodyParser.urlencoded());

  app.get('/', function (req, res) {
    res.sendFile( __dirname + '/public/age.html')
  });

  app.get('/public/index.html', function (req, res) {
    res.sendFile( __dirname + '/public/index.html')
  });

  app.get('/public/404.html', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
  });

  app.get('/public/css/app.css', function (req, res) {
    res.sendFile( __dirname + '/public/css/app.css')
  });

  app.get('/public/js/app.js', function (req, res) {
    res.sendFile( __dirname + '/public/js/app.js')
  });

  app.get('/public/js/pics.js', function (req, res) {
    res.sendFile( __dirname + '/public/js/pics.js')
  });

  app.get('/public/js/title.js', function (req, res) {
    res.sendFile( __dirname + '/public/js/title.js')
  });

  app.get('/public/js/comments.js', function (req, res) {
    res.sendFile( __dirname + '/public/js/comments.js')
  });

  app.post( '/', function (req, res) {
    console.log('response', req.body)
    res.end();
  });



const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('Server Listening. . .')
});