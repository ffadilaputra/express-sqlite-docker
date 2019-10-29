'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello internet\n');
});

app.listen(PORT, HOST);
console.log(`Magic happen on http://${HOST}:${PORT}`);
