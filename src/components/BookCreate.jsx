import { useState } from "react"

const BookCreate = ({onCreate}) => {

  const [title, setTitle]=useState('');

  const formSubmitHandle = (event) => {
    event.preventDefault();
    onCreate(title);
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
        <input className="input" type="text" id="title" value={title} onChange={handleChange}/>
        <button className="button">Create!</button>
      </form>
    </div>
  )
}

export default BookCreate