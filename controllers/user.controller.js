//import modelo usuario, bcrypt 
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const { generateJWT } = require('../utils/jwt')


//CRUD 
// GET
const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()  

        res
          .status(200)
          .json({
              users: users
          })
          .send()        
    } catch (error) {
        return res.json({
            error: error
        })
    }

}
// POST
const saveUser = async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body
        const hash = bcrypt.hashSync(password, 10)
    
        const user = new userModel({
            name: name,
            lastName: lastName,
            email: email,
            password: hash
        })
        await user.save()
        res
            .status(201)
            .json({
                message: 'Usuario creado'
            })
            .send()        
    } catch (error) {
        return res.json({
            error:error
        })
    }

}
// PUT 
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, lastName, email, password } = req.body
        await userModel.findByIdAndUpdate(id, {name: name,
            lastName: lastName,
            email: email,
            password: password})
    
            res
                .status(200)
                .json({
                    message: 'Actualizado correctamente'
                })
                .send()        
    } catch (error) {
        return res.json({
            error:error
        })
    }

}
// DELETE
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await userModel.findByIdAndDelete(id)
    
        res
            .status(200)
            .json({
                message:'Eliminado correctamente'
            })
            .send()        
    } catch (error) {
        return res.json({
            error:error
        })        
    }

}

// Login / 
const loginUser = async (req, res) =>{
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({email: email})
    
        if(!user) {
           return res
                .status(404)
                .json({
                    message: 'Usuario no encontrado',
                    isAuth: false
                })
                .send()
        }
    
        const isMatch = bcrypt.compareSync(password, user.password)
    
        if(isMatch){
            const token = generateJWT(user._id)
    
            return res
                .status(200)
                .json({
                    message: 'Usuario logeado correctamente',
                    isAuth: true,
                    user:{
                        name: user.name, 
                        lastName: user.lastName,
                        email: user.email
                    },
                    token: token
                })
                .send()
        } else{
            return res
            .status(401)
            .json({
                message:'Usuario incorrecto',
                isAuth: false
            })
            .send()
        }
    } catch (error) {
        return res.json({
            error: error
        })
    }

}

module.exports = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser, 
    loginUser
}