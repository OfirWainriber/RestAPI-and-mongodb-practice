const express = require('express');
const bodyParser = require('body-parser');
const User = require('../modules/user');


const router = express.Router();

router.get("/" , async (req, res) => {
    const users = await User.find()
    res.json(users);
});

router.post("/", bodyParser.json(), async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        bio: req.body.bio
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({message: err});
    }
    
    console.log('new entry into db');
});

router.get("/:userID", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.userID);
        res.send(foundUser);
    } catch (error) {
        res.send(error);
    }
})

router.patch("")

router.delete("/:userID", async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.userID});
        res.json(removedUser);
    } catch (error) {
        res.json({message: error});
    }
})

module.exports = router;