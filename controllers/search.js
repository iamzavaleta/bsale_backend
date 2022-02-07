const {request, response} = require('express');

const dbConnection = require('../database/config');

const getSearch = (req, res = response) =>{
    const {id} = req.params;
    const name = `%${id}%`
        dbConnection.query(
            //`SELECT * FROM product WHERE name LIKE ${dbConnection.escape(name)}`
            `SELECT 	p.id, 
            p.name, 
            p.url_image, 
            p.price, 
            p.discount, 
            c.name as category 
            FROM product p join category c ON p.category=c.id 
            WHERE p.name LIKE ${dbConnection.escape(name)};`, (err, rows, fields)=>{
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