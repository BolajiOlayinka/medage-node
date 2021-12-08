module.exports = (app) => {
    const Cart = require('../controllers/cart.controller.js');

    // Add items to cart
    app.post('/addtocart', Cart.addItemToCart);

    // Get Items in a cart
    app.get('/getcart', Cart.getCartItems);

    // Delete an Item in Cart
    app.delete('/cart/:cartId', Cart.removeCartItems);

}
