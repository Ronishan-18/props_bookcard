// BookCard.jsx
function BookCard({ title, author, description }) {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
}

// Basic styling to match your screenshot
const cardStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  margin: '10px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  color: '#333',
  width: '250px'
};

export default BookCard;