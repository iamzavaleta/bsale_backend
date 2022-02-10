require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const productsPath = '/api/products';
const categoriesPath = '/api/categories';
const searchPath = '/api/search';

// Settings
app.set('port', process.env.PORT);

//Cors
app.use(cors());

// Middlewares
app.use(express.json());

// Routes
app.use(productsPath, require('./routes/products'));
app.use(categoriesPath, require('./routes/categories'));
app.use(searchPath, require('./routes/search'));

// Error routes
app.use('/*',(req,res)=>{res.status(404).json({msg: 'routes error'})});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});