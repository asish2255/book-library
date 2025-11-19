
function BookCard({ title, author, genre, year, description }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-author"><strong>Author:</strong> {author}</p>
      <p className="book-genre"><strong>Genre:</strong> {genre}</p>
      <p className="book-year"><strong>Published:</strong> {year}</p>
      <p className="book-description">{description}</p>
    </div>
  );
}

export default BookCard;
