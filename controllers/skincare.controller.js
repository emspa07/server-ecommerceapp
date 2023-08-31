const skincareModel = require('../models/skincare.model')

//CRUD
//GET
const getProducts = async (req, res) =>{
    try {
        const skincareProduct = await skincareModel.find()

        res
            .status(200)
            .json({
                skincareProduct: skincareProduct
            })
            .send()
    } catch (error) {
       return res.json({
            error: error
        }) 
    }
}

const addProduct = async (req, res) =>{
    try {
       const {img, title, description, price, inStock} = req.body
    
       const product = new skincareModel({
            img: img,
            title: title,
            description: description,
            price: price,
            inStock: inStock
       })
       await product.save()
       res 
            .status(201)
            .json({
                message: 'Producto agregado'
            })
        .send()
    } catch (error) {
        return res.json({
            error:error
        })
    }
}

module.exports = {
    getProducts,
    addProduct
}