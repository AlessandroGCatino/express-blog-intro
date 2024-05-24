const express = require('express');
const app = express()
const port = 3000

const blog = require('./controllers/blog.js');

app.use(express.static('public'));
app.use(express.json());


app.get("/", (req, res) =>{
    res.send("<h1>Benvenuto nel mio blog!</h1>")
})

app.get("/posts", blog.index)

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});