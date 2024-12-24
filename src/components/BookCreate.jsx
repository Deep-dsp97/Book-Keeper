import { useState } from "react"
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {

  const [title, setTitle]=useState('');
  const { createBook } = useBooksContext();

  const formSubmitHandle = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div className="book-create">
      <h3>Add a Book:</h3>
      <form action="" onSubmit={formSubmitHandle}>
        <label htmlFor="title">Title</label>
        <input className="input" type="text" id="title" value={title} onChange={handleChange} required/>
        <button className="button">Create!</button>
      </form>
    </div>
  )
}

export default BookCreate