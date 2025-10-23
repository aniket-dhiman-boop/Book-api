# 📚 Book API

Welcome to the **Book API**! This is a simple RESTful API built using **Node.js** and **Express** that allows you to manage a collection of books. Perfect for beginners learning API development. 😄

---

## ✅ Features

* **View all books** – Retrieve a list of all books.
* **Add a new book** – Add a book with a title and author.
* **Update a book** – Edit book details by its ID.
* **Delete a book** – Remove a book from the collection.

---

## 🛠️ Technologies Used

* **Node.js** – JavaScript runtime.
* **Express.js** – Web framework for building APIs.
* **JSON** – For sending and receiving data.

---

## 📌 Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/`          | Welcome message     |
| GET    | `/books`     | Get all books       |
| POST   | `/books`     | Add a new book      |
| PUT    | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

---

## ⚡ Usage

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/book-api.git
cd book-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
node index.js
```

4. **Open your browser or Postman** and go to:

```
http://localhost:3000/
```

---

## 📚 Example Book Data

```json
[
  { "id": 1, "title": "Harry Potter", "author": "J.K. Rowling" },
  { "id": 2, "title": "Rich Dad Poor Dad", "author": "Robert Kiyosaki" }
]
```

---

## 🤝 Contribution

Feel free to fork this project, improve it, or add more features. Pull requests are always welcome!

---

## 📝 License

This project is open-source and free to use.
