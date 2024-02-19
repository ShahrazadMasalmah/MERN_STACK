const ProductController = require("../controllers/product.controller");

module.exports = function(app) {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
}