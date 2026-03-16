const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/json', (req, res) => {
    res.json({ mensaje: '¡Hola, mundo en formato JSON!' });
});

app.get('/cositas', (req, res) => {
    res.json({ mensaje: '¡Ema, Agudelo tengo 16 y estudio en la salle en formato COSITAS!' });
});

app.listen(3000, () => {
    console.log('servidor escuchando en el puerto 3000');
});