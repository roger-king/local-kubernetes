const express = require('express');
const app = express();

app.get('/', (_req, res) => {
    res.send('Whats up?');
})

app.get('/nothing', (_req, res) => {
    res.send('nothing');
})

app.listen(7000, () => {
    console.log('Running the application on port 7000');
})