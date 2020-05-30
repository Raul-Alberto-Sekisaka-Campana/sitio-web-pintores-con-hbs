//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'RAUL ALBERTO SEKISAKA CAMPAÑA',
        year : new Date().getFullYear(),
        title : 'INICIO'
    });
});

app.get('/pintor 1', (req, res)=>{
    res.render('pintor 1', {
        autor : 'RAUL ALBERTO SEKISAKA CAMPAÑA',
        year : new Date().getFullYear(),
        title : 'ARTEMISIA GENTILESCHI'
    });
});

app.get('/pintor 2', (req, res)=>{
    res.render('pintor 2', {
        autor : 'RAUL ALBERTO SEKISAKA CAMPAÑA',
        year : new Date().getFullYear(),
        title : 'VINCENT VAN GOGH'
    });
});

app.get('/pintor 3', (req, res)=>{
    res.render('pintor 3', {
        autor : 'RAUL ALBERTO SEKISAKA CAMPAÑA',
        year : new Date().getFullYear(),
        title : 'CLAUDE MONET'
    });
});


app.get('/pintor 4', (req, res)=>{
    res.render('pintor 4', {
        autor : 'RAUL ALBERTO SEKISAKA CAMPAÑA',
        year : new Date().getFullYear(),
        title : 'LEONARDO DA VINCI',
        
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
})