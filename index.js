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
    if(book.name && book.author && book.id){
        return response.status(201).send({message: "Livro cadastrado com sucesso! =)"})
    } else{
        return response.status(400).send({message: "Falta enviar o body corretamente..."})
    }
}

const deleteBooks = (request,response)=>{
    const id = request.params.id
    console.log('id',id)
    if(id){
        return response.status(201).send({message: "Livro excluído."})
    } else{
        return response.status(400).send({message: "Faltou informar id na URL para exclusão."})
    }
}

const updateBooks = (request,response)=>{
    const id = request.params.id
    if(id){
        return response.status(201).send({message: "Livro atualizado."})
    } else{
        return response.status(400).send({message: "Faltou informar id na URL para atualização."})
    }
}

app.get('/book',listBooks)
app.post('/book',createBooks)
app.delete('/book/:id',deleteBooks)
app.put('/book/:id',updateBooks)