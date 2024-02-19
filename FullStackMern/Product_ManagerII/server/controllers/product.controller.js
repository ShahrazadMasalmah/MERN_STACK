const Product = require("../models/product.model");

// create a product document in the database
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then( newProduct => {
            res.json({ product: newProduct })
        })
        .catch( error => {
            res.json(error)
        });
}

// retrieve all products from database
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then( allProducts => {
            res.json(allProducts)
        })
        .catch( error => {
            res.json(error)
        });
}

// retrieve one product from database
module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}