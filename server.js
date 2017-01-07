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

  app.post( '/', function (req, res) {
    console.log('response', req.body)
    res.end();
  });



const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('Server Listening. . .')
});