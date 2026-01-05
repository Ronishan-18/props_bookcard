import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// App.jsx
import BookList from './BookList';

function App() {
  const myBooks = [
    { 
      title: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      description: "A novel set in the American South during the 1930s." 
    },
    { 
      title: "1984", 
      author: "George Orwell", 
      description: "A dystopian novel set in a totalitarian regime." 
    },
    { 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      description: "A novel depicting the Jazz Age and the American Dream." 
    }
  ];

  return (
    <div style={{ backgroundColor: '#0a192f', color: 'white', padding: '40px', textAlign: 'center', minHeight: '100vh' }}>
      <h1>Book List</h1>
      <BookList books={myBooks} />
    </div>
  );
}

export default App;