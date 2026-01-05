// BookList.jsx
import BookCard from './BookCard';

function BookList({ books }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {books.map((book, index) => (
        <BookCard 
          key={index} 
          title={book.title} 
          author={book.author} 
          description={book.description} 
        />
      ))}
    </div>
  );
}

export default BookList;
