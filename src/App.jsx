import BookList from './BookList';
import './index.css'; // make sure Tailwind is imported here

function App() {
  const myBooks = [
    { 
      title: "To Kill a Mockingbird", 
      author: "Abiyaan,kapi", 
      description: "A novel set in the American South during the 1930s." 
    },
    { 
      title: "1984", 
      author: "dishanth,Thuva", 
      description: "A dystopian novel set in a totalitarian regime." 
    },
    { 
      title: "The Great Gatsby", 
      author: "Sai,saran", 
      description: "A novel depicting the Jazz Age and the American Dream." 
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Book List</h1>
      <BookList books={myBooks} />
    </div>
  );
}

export default App;
