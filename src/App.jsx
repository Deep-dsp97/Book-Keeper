import { useEffect, useContext } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

const App = () => {

  const { stableFetchBook } = useContext(BooksContext);

  useEffect(() => {
    stableFetchBook();
  }, [stableFetchBook]);
  
  return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
  )
}

export default App