import { useContext } from "react";
import BooksContext from '../context/books.jsx';
import BookShow from "./BookShow";

const BookList = ({books, deleteBook, onEdit}) => {

  const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} deleteBook={deleteBook} onEdit={onEdit}/>
  })
    return (
      <div className="book-list">
        {count}
        <button onClick={incrementCount}>Click!</button>
        {renderedBooks}
      </div>
    )
  }
  
  export default BookList
