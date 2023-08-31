//importamos express, mongoose, variables de entorno
const express = require('express')
const server = express()
const dotenv = require('dotenv').config()
const cors = require ('cors')
const mongoose = require('mongoose')
const { getUsers, saveUser, updateUser, deleteUser, loginUser} = require('./controllers/user.controller')
const { getProducts, addProduct } = require ('./controllers/skincare.controller')
const { getPerfumsProducts, addPerfumsProduct} = require('./controllers/perfums.controller')
const { getMakeupProduct, addMakeupProduct } = require('./controllers/makeup.controller')
const port = process.env.PORT || 3000

//Obtener información 
server.use(express.json())
server.use(cors({origin: '*'}))

mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
    console.log('Conexión a la base de datos')
}).catch((error) => {
    console.log('error' + error)
})

// ruta (endpoint) para obtener usuario
server.get('/users', getUsers)
// ruta (endpoint) para crear usuario
server.post('/users', saveUser)
//ruta (endpoint) para login usuario
server.post('/users/login', loginUser)
//ruta (endpoint) para actualizar usuario
server.put('/users/:id', updateUser)
//ruta (endpoint) para borrar
server.delete('/users/:id', deleteUser)

//ruta (endpoint) para obtener producto de Skincare
server.get('/skincareProduct', getProducts)
//ruta (endpoit) para agregar producto de Skincare
server.post('/skincareProduct/register', addProduct)

//ruta (endpoint) para obtener productos de Perfumes
server.get('/perfumsProduct', getPerfumsProducts)
//ruta (endpoint) para agregar producto de Perfumes
server.post('/perfumsProduct/register', addPerfumsProduct)

//ruta (endpoint) para obtener productos de Makeup
server.get('/makeupProduct', getMakeupProduct)
//ruta (endpoint) para agregar productos de Makeup
server.post('/makeupProduct/register', addMakeupProduct)

//Iniciar servidor 
server.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ' + port)
})