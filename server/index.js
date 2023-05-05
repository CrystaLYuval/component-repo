const express = require('express');
const app = express();

app.get('/my-text', (req, res) => {
  const myText = 'Hello World';
  res.send(myText);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});