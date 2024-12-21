import { useState } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {

  const [books, setBooks] = useState([]);
  
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3007/books',{
        title: title
    })
    
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    
    // -------- Local - not persistent
    // const updatedBooks = [...books, 
    //     {id: Math.round(Math.random() * 9999 ), title: title }
    // ];
    // setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
        return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) => {
    const updateEditBook = books.map((book) => {
        if(book.id == id){
            return {...book, title:newTitle};
        }
        return book;
    })
    setBooks(updateEditBook);
  }
  
  return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} deleteBook={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App