const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('Server Listening. . .')
})