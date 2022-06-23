const express = require('express');
const usersRoute = require('./routes/users');
const gamesRoute = require('./routes/games');
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://test:test@cluster0.nnzhm6b.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const PORT = 5000;

mongoose.connect(dbURI)
.then(app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`)))
.catch((err) => console.log(err));

app.use('/users', usersRoute);
app.use('/games', gamesRoute);

app.get('/', (req, res) => {
    res.send("hello");
});

