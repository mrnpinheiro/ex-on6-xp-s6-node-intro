const express = require('express');

const app = express(); // Iniciando nosso servidor

const PORT = 3001
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

app.get('/book',listBooks)