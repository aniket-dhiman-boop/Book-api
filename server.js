const express = require('express');
const app = express();
const port = 3000;

// Middleware to read JSON data
app.use(express.json());

// Temporary book data
let books = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
  { id: 2, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki' }
];

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Book API 😄');
});

// GET - Show all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST - Add a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.json({ message: 'Book added!', book: newBook });
});

// PUT - Update a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  book.title = req.body.title;
  book.author = req.body.author;
  res.json({ message: 'Book updated!', book });
});

// DELETE - Remove a book
app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.json({ message: 'Book deleted!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
