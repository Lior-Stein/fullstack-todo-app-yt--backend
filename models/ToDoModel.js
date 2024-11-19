const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        requier: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema)