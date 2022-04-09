const express = require('express');
const app = express();

app.set('view engine', 'ejs');


/*app.get('/',(req, res)=>{
    res.send('hola');
})*/

//Para poder capturar los datos del formulario (sin urlencoded nos devuelve "undefined")
app.use(express.urlencoded({extended:false}));
//además le decimos a express que vamos a usar json
app.use(express.json());

app.use('/', require('./router'));

app.listen(9000, ()=>{
    console.log('Servidor corriendo en http://localhost:9000')
})