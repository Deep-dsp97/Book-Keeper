import BookShow from "./BookShow";

const BookList = ({books, deleteBook, onEdit}) => {

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} deleteBook={deleteBook} onEdit={onEdit}/>
  })
    return (
      <div className="book-list">{renderedBooks}</div>
    )
  }
  
  export default BookList
