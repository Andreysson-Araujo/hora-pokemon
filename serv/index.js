import bodyParser from "body-parser"
import "dotenv/config"
import express from "express";
const app = express()
const PORT = process.env.PORT || 3002

app.use(bodyParser.json())



let books = [{id:1, name:"Senhor dos aneis"}, {id:2, name:"Harry Potter"}, {id:3, name:"Sherlock Holmes"}] 

app.get("/home", (_req, res) => {
    res.status(200).json(books)
});


app.post("/home",(req, res) => {
    const{id, name}=req.body
    books = [...books, {id, name}]
    return res.status(200).json(books)
});

app.put("/home",(req, res) => {
    const{id, name}=req.body
    const booksfilter = books.filter((book) => book.id !== id)
    books = [...booksfilter, {id, name}]
    return res.status(200).json(books)
});


app.listen(PORT, ()=> console.log(`Run PORT ${PORT}`))