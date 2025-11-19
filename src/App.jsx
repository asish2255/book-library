import "./App.css";
import BookCard from "./components/BookCard";

function App() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Non-Fiction",
      year: 2018,
      description:
        "A practical guide on building good habits and breaking bad ones through small, consistent changes.",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      year: 1988,
      description:
        "A philosophical novel about following your dreams, destiny, and listening to your heart.",
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      genre: "Non-Fiction",
      year: 2016,
      description:
        "Explores how focused, distraction-free work can create better results and more meaningful achievements.",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      genre: "Fiction",
      year: 1949,
      description:
        "A dystopian story that warns about totalitarianism, constant surveillance, and loss of individual freedom.",
    },
    {
      id: 5,
      title: "The Subtle Art",
      author: "Mark Manson",
      genre: "Non-Fiction",
      year: 2016,
      description:
        "A self-help book that challenges traditional positivity and teaches how to focus on what truly matters.",
    },
  ];

  const totalBooks = books.length;

  const mostCommonGenre = "Non-Fiction";

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1>My Book Collection</h1>
        <p>Books That Changed My Perspective</p>
      </header>

      {/* Books List Section */}
      <main className="content">
        <section className="books-section">
          <h2>Library Showcase</h2>
          <div className="books-grid">
            {books.map((book) => (
              <BookCard
                key={book.id} // ✅ unique key
                title={book.title}
                author={book.author}
                genre={book.genre}
                year={book.year}
                description={book.description}
              />
            ))}
          </div>
        </section>

        {/* Books Summary Section */}
        <section className="summary-section">
          <h2>Collection Summary</h2>
          <p>Total books: <strong>{totalBooks}</strong></p>
          <p>Most common genre: <strong>{mostCommonGenre}</strong></p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>Created by Asish</p>
        <p>Contact: asishsiva1@example.com</p>
        <p>© {new Date().getFullYear()} Book Lover</p>
      </footer>
    </div>
  );
}

export default App;
