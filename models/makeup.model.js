const {Schema, Types, model} = require("mongoose")

const makeupSchema = new Schema({
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

const makeupModel = model ("makeup_beautyland", makeupSchema)
module.exports = makeupModel
