const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    year: {
        type: String,
    },
    rating: {
        type: Number,
    },
    imdb: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Movie', MovieSchema)