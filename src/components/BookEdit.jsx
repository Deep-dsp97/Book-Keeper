import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({book, onSubmit}) => {
    const [title,setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(); // Closes the edit form
      editBookById(book.id , title);
      setTitle('');
    }

    const handleChange = (event) => {
      setTitle(event.target.value);
    }

    return (
      <form className="book-edit" action="" onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} type="text" className="input" onChange={handleChange}/>
        <button className="button is-primary">Save</button>
      </form>
    )
  }
  
  export default BookEdit