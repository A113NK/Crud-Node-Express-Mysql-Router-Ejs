const express = require("express");
const router = express.Router();

/* router.get('/contacto',(req, res)=>{
    res.send('Contacto')
})
router.get('/', (req, res)=>{     
    conexion.query('SELECT * FROM usuario',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            res.send(results);          
        }   
    })
}) */


//Llamamos a la conexion de la DB
const conexion = require('./database/db')

//ruta para enviar los datos en formato json
router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM usuario',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})
//RUTA PARA CREAR REGISTROS
router.get('/create', (req, res)=>{
    res.render('create')
})

//RUTA PARA MOSTRAR TODOS LOS REGISTROS
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM usuario', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    }) 
})

//RUTA PARA EDITAR UN REGISTRO
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM usuario WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
})
//RUTA PARA ELIMINAR UN REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM usuario WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

//Invocamos los metodos para el CRUD
const crud = require('./controllers/crud')

// usamos router.post porque en el formulario el method="POST"
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router