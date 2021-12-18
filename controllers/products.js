const {request, response} = require('express');

const dbConnection = require('../database/config');

const getProductos = (req, res = response)=>{

    const {limit = 15, page = 1} = req.query;

    if(!isNaN(limit) && !isNaN(page)){
        const offset = (Math.abs(page) - 1) * Math.abs(limit);
        dbConnection.query(`SELECT * FROM product limit ${limit} offset ${offset}`,(err, rows, fields)=>{
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

module.exports = {
    getProductos,
    getProductbyId
}