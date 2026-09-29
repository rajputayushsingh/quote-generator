# ✨ Quote Generator with History

A full-stack Quote Generator application that fetches random quotes from a public API and allows users to save their favorite quotes in a MongoDB database.

## 🚀 Features

* 🔄 Fetch random quotes from a public API
* ❤️ Save favorite quotes
* 📜 View favorite quote history
* 📋 Copy quotes to clipboard
* 🗑️ Delete favorite quotes
* 💾 Store favorites using MongoDB
* 📱 Responsive and user-friendly interface
* 🌐 REST API based backend

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API

## 📂 Project Structure

```text
Quote Generator/
│
├── models/
│   └── Quote.js
│
├── routes/
│   └── quoteRoutes.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/quote-generator.git
```

### 2. Open the project

```bash
cd quote-generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Never upload your `.env` file to GitHub.

### 5. Start the application

For development:

```bash
npm run dev
```

Or:

```bash
npm start
```

### 6. Open in browser

```text
http://localhost:5000
```

## 🔗 API Endpoints

| Method | Endpoint                    | Description             |
| ------ | --------------------------- | ----------------------- |
| GET    | `/api/quotes/favorites`     | Get all favorite quotes |
| POST   | `/api/quotes/favorites`     | Save a favorite quote   |
| DELETE | `/api/quotes/favorites/:id` | Delete a favorite quote |

## 🌐 External API

The application uses the DummyJSON Quotes API to fetch random quotes.

```text
https://dummyjson.com/quotes/random
```

## 📋 How It Works

1. User clicks **New Quote**.
2. Frontend requests a random quote from the public API.
3. The quote and author are displayed.
4. User can click **Favorite** to save the quote.
5. Backend stores the quote in MongoDB.
6. Favorite quotes are displayed in the history section.
7. Users can copy or delete saved quotes.

## 🔐 Security

* Environment variables are stored in `.env`.
* `.env` is excluded from Git using `.gitignore`.
* MongoDB credentials should never be committed to the repository.

## 📸 Application

The application provides a simple interface for generating, saving, copying, and managing favorite quotes.

## 👨‍💻 Author

**Ayush Singh**

B.Tech Computer Science & Engineering

## 📄 License

This project is created for educational and learning purposes.
