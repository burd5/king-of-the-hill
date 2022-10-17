const mongoose = require('mongoose')

const CafeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    rating: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Cafe', CafeSchema)