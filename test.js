const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express is working fine!');
});

app.listen(port, () => {
  console.log(`Test server listening at http://localhost:${port}`);
});
