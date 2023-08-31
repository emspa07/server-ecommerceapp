const perfumsModel = require ('../models/perfums.model')

//CRUD
//GET 
const getPerfumsProducts = async (req, res) =>{
    try {
        const perfumsProduct = await perfumsModel.find()

        res
            .status(200)
            .json({
                perfumsProduct: perfumsProduct
            })
            .send()
    } catch (error) {
       return res.json({
            error: error
        }) 
    }
}

const addPerfumsProduct = async (req, res) =>{
    try {
       const {img, title, description, price, inStock} = req.body
    
       const product = new perfumsModel({
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
    getPerfumsProducts, 
    addPerfumsProduct
}