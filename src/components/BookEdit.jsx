import { useState } from "react"

const BookEdit = ({book, onSubmit}) => {
    const [title,setTitle] = useState(book.title);

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(book.id , title);
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