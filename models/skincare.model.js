const {Schema, Types, model} = require("mongoose")

const skincareSchema = new Schema({
    id: Types.ObjectId,
    img:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        require: true
    }, 
    description:{
        type: String,
        require: true
    },
    price:{
        type: String, 
        require: true
    },
    inStock:{
        type: Boolean,
        default: true
    }
})

const skincareModel = model("skincare_beautyland", skincareSchema)
module.exports = skincareModel