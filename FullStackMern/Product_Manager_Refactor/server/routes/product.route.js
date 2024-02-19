const ProductController = require("../controllers/product.controller");

module.exports = function(app) {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getProduct);
    app.patch("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
}