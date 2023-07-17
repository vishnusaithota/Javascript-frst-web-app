import express from "express"
const app = express()
const port = 3000

const toDos = [
    {id: 1, name: "Learn JS", done: true},
    {id: 2, name: "Learn Express", done: false},
    {id: 3, name: "Learn React JS", done: false},
];

app.get('/', (req, res) => {
    res.send("OLA !");
});

// Route: api/v1/todos

app.get('/api/v1/todos', (req, res) => {
    res.json(toDos);
});

app.listen(port, () => {
    console.log(`Example app listenning at http://localhost:${port}`);
});