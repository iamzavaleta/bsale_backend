const {request, response} = require('express');

const dbConnection = require('../database/config');

const getProductos = (req, res = response)=>{

    const {limit = 15, page = 1} = req.query;

    if(!isNaN(limit) && !isNaN(page)){
        const offset = (Math.abs(page) - 1) * Math.abs(limit);
        dbConnection.query(
            /*`SELECT * FROM product limit ${limit} offset ${offset}`*/
            `SELECT 	p.id, 
            p.name, 
            p.url_image, 
            p.price, 
            p.discount, 
            c.name as category 
            FROM product p join category c ON p.category=c.id order by p.id
            LIMIT ${limit}
            OFFSET ${offset};`,(err, rows, fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log('Error en la query',err);
            }
        })
    }else{
        res.status(400).json({
            msg : 'Limit or page not is a number'
        })
    }

}

const getProductbyId = (req, res = response) =>{
    const {id} = req.params;
    if(!isNaN(id)){
        dbConnection.query(`SELECT * FROM product WHERE id = ${id}`, (err, rows, fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log('Error en la query',err);
            }
        })
    }else{
        res.status(400).json({
            msg: `Id: ${id} is not a number`
        })
    }
}

const getProductByCategory = (req,res = response)=>{
    const {id} = req.params;

    if(!isNaN(id)){
        dbConnection.query(`
        SELECT 	p.id, 
            p.name, 
            p.url_image, 
            p.price, 
            p.discount, 
            c.name as category 
            FROM product p join category c ON p.category=c.id 
            WHERE p.category = ${id}`,(err, rows, fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log('Error en la query',err);
            }
        })
    }else{
        res.status(400).json({
            msg: `Id: ${id} is not a number`
        })
    }
}

//Exportacion de rutas
module.exports = {
    getProductos,
    getProductbyId,
    getProductByCategory
}

