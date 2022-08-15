const express = require('express');
const mongoose = import('mongoose');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('teste oi');
})

let porta = process.env.PORT || 3000;

app.listen(porta, () => {
    console.log('servidor em execução na porta ' + porta);
})