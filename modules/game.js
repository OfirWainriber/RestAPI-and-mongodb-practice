const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    releaseDate:{
        type: Date,
        default: Date.now()
    }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;