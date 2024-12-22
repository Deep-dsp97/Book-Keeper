import { useEffect, useState } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {

  const [books, setBooks] = useState([]);

  //   When app starts up, make a request to API
  // to get the current list of books
  const fetchBooks = async () => {
    const response =  await axios.get('http://localhost:3007/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);
  
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

  const deleteBookById = async (id) => {
    //------ Update Db.json
    const response = await axios.delete(`http://localhost:3007/books/${id}`);

    //------ End block - Update Db.json
    const updatedBooks = books.filter((book) => {
        return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  const editBookById =  async (id, newTitle) => {

    //------ Update Db.json
    const response = await axios.put(`http://localhost:3007/books/${id}`, {
      title: newTitle
    })
    //------ End block - Update Db.json

    const updateEditBook = books.map((book) => {
        if(book.id == id){
            return {...book, ...response.data};
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