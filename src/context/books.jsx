import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext(null);

function Provider({children}){

    const [books, setBooks] = useState([]);

    //   When app starts up, make a request to API
    // to get the current list of books
    const fetchBooks = async () => {
        const response =  await axios.get('http://localhost:3007/books');
        setBooks(response.data);
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3007/books',{
            title: title
        })
        
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
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

    const valueToShare = {
        books: books,
        deleteBookById: deleteBookById,
        editBookById: editBookById,
        createBook: createBook,
        fetchBooks: fetchBooks
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;