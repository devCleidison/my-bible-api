const express = require("express");
const app = express();
const data = require("../data.json");

const PORT = 3000;

app.get('/', (req, res) => {
  res.json(data);
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));