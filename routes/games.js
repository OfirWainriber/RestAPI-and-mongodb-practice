const express = require('express');
const Game = require('../modules/game');
const bodyParser = require('body-parser');


const router = express.Router();

router.get("/", async (req, res) => {
    const games = await Game.find();
    res.json(games);
})

router.post("/", bodyParser.json(), async (req, res) => {
    const game = new Game({
        name: req.body.name,
        price: req.body.price,
        date: req.body.date
    })

    try {
        const savedGame = await game.save();
        res.json(savedGame);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/all', async (req, res) => {
    try {
        const removedGame = await Game.deleteMany({});
        res.json(removedGame);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/:gameID', async (req, res) => {
    try {
        const removedGame = await Game.deleteOne({_id: req.params.gameID});
        res.json(removedGame);
    } catch (error) {
        res.json({message: error});
    }
});gi

module.exports = router;