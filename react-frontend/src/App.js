import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("/api/v1/todos")
      .then(res => {
        console.log(res.data);
        setTodos(res.data)
      }).catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h1>
        Number of Todos : {todos.length}
      </h1>
      <ul>
        {todos.map(t => <li> Id: {t.id} description: {t.name} Done: {String(t.done)} </li>)}
      </ul>
    </div>
  )
}

export default App;
