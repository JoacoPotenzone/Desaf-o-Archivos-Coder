const ProductManager = require('./productManager')
async function runTests() {
  let productManager;

  try {

    productManager = new ProductManager('productos_test.json');

    const productsInitial = await productManager.getProducts();
    console.log('Test 2:', productsInitial);

    const newProduct = {
      title: 'Berserk',
      description: 'Tomo 1 de Berserk',
      price: 3000,
      thumbnail: 'Sin imagen',
      code: 'abc123',
      stock: 8,
    };
    const addedProduct = await productManager.addProduct(newProduct);
    console.log('Test 3:', addedProduct);

    const productsAfterAdd = await productManager.getProducts();
    console.log('Test 4:', productsAfterAdd);

    const retrievedProduct = await productManager.getProductById(addedProduct.id);
    console.log('Test 5:', retrievedProduct);

    const updatedProduct = await productManager.updateProduct(addedProduct.id, { price: 250 });
    console.log('Test 6:', updatedProduct);

    const productsAfterDelete = await productManager.deleteProduct(addedProduct.id);
    console.log('Test 7:', productsAfterDelete);
  } catch (error) {
    console.error('Error en las pruebas:', error.message);
  }
}

// Ejecuta las pruebas
runTests();