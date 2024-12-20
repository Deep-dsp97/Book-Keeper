import { useState } from "react"
import BookCreate from "./components/BookCreate";

const App = () => {

  const [books, setBooks] = useState([]);
  
  const createBook = (title) => {
    console.log("Main title of the book", title);
  }
  
  return (
    <div>
        <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App