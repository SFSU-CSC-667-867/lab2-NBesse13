const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/first', (req, res) => res.send('Hey, it works!'));
app.get('/second', (req, res) => res.send ('Does this make me a software developer?'));
app.get('/third', (req, res) => {
    console.log(req.query);
    res.send('My name is  ' + req.query.name)
});

app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((networkResponse) => {
        res.send(networkResponse.data);
    })
    .catch(() => {
        res.send(':( did not work.');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));