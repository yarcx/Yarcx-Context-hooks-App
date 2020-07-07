import React from 'react';
import Navbar from './Component/Navbar'
import AddBook from './Component/addBook'
import BookContextProvider from './context/BookContext';
import BookList from './Component/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList />
        <AddBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
