const {Schema, Types, model} = require("mongoose")

const perfumsSchema = new Schema({
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

const perfumsModel = model("perfums_beautyland", perfumsSchema)
module.exports = perfumsModel