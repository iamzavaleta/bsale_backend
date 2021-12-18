const {request, response} = require('express');

const dbConnection = require('../database/config');

const getSearch = (req, res = response) =>{
    const {id} = req.params;
    const name = `%${id}%`
        dbConnection.query(`SELECT * FROM product WHERE name LIKE ${dbConnection.escape(name)}`, (err, rows, fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log('Error en la query',err);
            }
        })
}
module.exports = {
    getSearch
}