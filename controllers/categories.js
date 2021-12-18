const {request, response} = require('express');

const dbConnection = require('../database/config');

const getCategories = (req, res = response)=>{
    dbConnection.query('SELECT * FROM category',(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log('Error en la query',err);
        }
    })
}

const getCategoryById = (req, res = response) =>{
    const {id} = req.params;
    if(!isNaN(id)){
        dbConnection.query(`SELECT * FROM category WHERE id = ${id}`, (err, rows, fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log('Error en la query',err);
            }
        })
    }else{
        res.status(400).json({
            msg : `Id: ${id} is not a number`
        })
    }
}

module.exports = {
    getCategories,
    getCategoryById
}