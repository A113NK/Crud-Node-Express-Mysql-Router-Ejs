const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
});

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion:'+error)
        return
    }
    console.log('Conectado e la BD MySQL')
})

module.exports = conexion;