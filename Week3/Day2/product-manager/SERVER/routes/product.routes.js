const productController = require('../controllers/prodproduct.controller');

module.exports = app => {
  app.get('/api/prodproducts', productController.findAllproducts);
  app.get('/api/prodproducts/:id', productController.findOneSingleproduct);
  app.patch('/api/prodproducts/:id', productController.updateExistingproduct);
  app.post('/api/prodproducts', productController.createNewproduct);
  app.delete('/api/prodproducts/:id', productController.deleteAnExistingproduct);
}