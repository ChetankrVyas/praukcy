const mongoose = require('mongoose')
const { Schema } = mongoose;

const FormSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('form', FormSchema)