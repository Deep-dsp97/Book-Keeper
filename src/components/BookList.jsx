import useBooksContext from '../hooks/use-books-context.jsx';
import BookShow from "./BookShow";

const BookList = () => {

  const { books } =  useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id}/>
  })
    return (
      <div className="book-list">
        {renderedBooks}
      </div>
    )
  }
  
  export default BookList;
