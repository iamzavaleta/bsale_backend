
const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE ,
    multipleStatements: true
});

dbConnection.connect((err)=>{
     if(err){
         console.log('Error al conectar la DB',err);
     }else{
        console.log('Conexion establecida con éxito!!!')
     }
});

module.exports = dbConnection