const express = require("express");
const app = express();
const data = require("../data.json");

const PORT = 3000;

app.get('/', (req, res) => {
  res.json(data);
})

app.get('/books', (req, res) => {
  res.json(data.books);
});

app.get('/books/:title', (req, res) => {
  const title = req.params.title;

  const response = data.books.find(book => book.title === title);
  res.json(response);
});


app.get('/books/:title/:chapterId', (req, res) => {
  const title = req.params.title;
  const chapterId = parseInt(req.params.chapterId);

  data.books.find(book => {
    if(book.title === title) {
      const response = book.chapters.find(chapter => chapter.number === chapterId);
      res.json(response);
    }
  });
});



app.get('/categories', (req, res) => {
  res.json(data.categories);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));