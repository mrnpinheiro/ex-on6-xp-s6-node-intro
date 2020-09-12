const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const PORT = 5000
const listenFunction = () => console.log('Servidor funcionando: Hello =)')

app.listen(PORT,listenFunction)

const listBooks = (request, response)=>{
    const books = [
        {
            name: "Sophie's World",
            author: "Jostein Gaarder",
            id: 1
        }
    ]
    return response.status(200).send(books)
}

const createBooks = (request,response)=>{
    const book = request.body
    console.log('Book: ',book)
    return response.status(201).send({message: "Livro cadastrado com sucesso! =)"})
}

app.get('/book',listBooks)
app.post('/book',createBooks)