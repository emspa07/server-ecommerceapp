const makeupModel = require ('../models/makeup.model')

//CRUD
//GET
const getMakeupProduct = async (req, res) =>{
    try {
        const makeupProduct = await makeupModel.find()

        res
            .status(200)
            .json({
                makeupProduct: makeupProduct
            })
            .send()
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

const addMakeupProduct = async (req, res) => {
    try {
        const {img, title, description, price, inStock} = req.body
    
       const product = new makeupModel({
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
    getMakeupProduct, 
    addMakeupProduct
}