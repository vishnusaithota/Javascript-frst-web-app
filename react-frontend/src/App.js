import './App.css';
import axios from "axios"

function App() {
  axios.get("/api/v1/todos")
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  return <h1> Hello React </h1>
}

export default App;
