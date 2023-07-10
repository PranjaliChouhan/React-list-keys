
import './App.css';
import React from 'react';

const NamesList = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const namesArray = ["John", "Jane", "Alice", "Bob"];
  const bookArray = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian"
    }, {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic"
    },
    
  ];
  return (
    <>
    <div className='name'>
      <h1>List of Names:</h1>
      <NamesList names={namesArray} />
    </div>
    <div className='book'>
      <h1>List of Books:</h1>
      <BookList books={bookArray} />
    </div>
    </>
  );
};

export default App;

