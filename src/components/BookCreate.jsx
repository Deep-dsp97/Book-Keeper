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
    <form action="" onSubmit={formSubmitHandle}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={handleChange}/>
      <button>Create!</button>
    </form>
  )
}

export default BookCreate