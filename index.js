//importamos express, mongoose, variables de entorno
const express = require('express')
const server = express()
const dotenv = require('dotenv').config()
const cors = require ('cors')
const mongoose = require('mongoose')
const { getUsers, createUser, userUpdate, userDelete, login} = require('./controllers/user.controller')
const port = process.env.PORT || 3000

//Obtener información 
server.use(express.json())
server.use(cors({origin: '*'}))

mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
    console.log('Conexión a la base de datos')
}).catch((error) => {
    console.log('error' + error)
})

server.get('/users', getUsers)
server.post('/users', createUser)
server.post('/users/login', login)
server.put('/users/:id', userUpdate)
server.delete('/users/:id', userDelete)

//Iniciar servidor 
server.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ' + port)
})