//Invocamos a la conexion de la DB
const conexion = require('../database/db');

//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const valor1 = req.body.user;
    const valor2 = req.body.rol;
    conexion.query('INSERT INTO usuario SET ?',{name:valor1, rol:valor2}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const valor1 = req.body.id;
    const valor2 = req.body.user;
    const valor3 = req.body.rol;
    conexion.query('UPDATE usuario SET ? WHERE id = ?',[{name:valor2, rol:valor3}, valor1], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};