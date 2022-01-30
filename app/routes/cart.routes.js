module.exports = (app) => {
    const Cart = require('../controllers/cart.controller.js');

    // Add items to cart
    app.post('/user/cart/:id', Cart.addItemToCart);

    // Get Items in a cart
    app.get('/user/getcart', Cart.getCartItems);

    // Delete an Item in Cart
    app.delete('/user/cart/:id', Cart.removeCartItems);

}
