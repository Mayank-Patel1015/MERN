const productController = require('../controllers/product.controller');

module.exports = app => {
  app.get('/api/products', productController.findAllProducts);
  app.get('/api/products/:id', productController.findOneSingleProduct);
  app.patch('/api/products/:id', productController.updateExistingProduct);
  app.post('/api/products', productController.createNewProduct);
  app.delete('/api/products/:id', productController.deleteAnExistingProduct);
}