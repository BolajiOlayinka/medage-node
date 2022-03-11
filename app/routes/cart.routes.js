module.exports = (app) => {
    const Cart = require('../controllers/cart.controller.js');
    const { requireSignin, userMiddleware } = require('../utils/middleware');
    // Add items to cart
    app.post('/api/cart/addtocart',requireSignin,userMiddleware, Cart.addItemToCart);

    // Get Items in a cart
    app.get('/api/cart/getcart',requireSignin,userMiddleware, Cart.getCartItems);

    // Delete an Item in Cart
    app.delete('/api/cart/:id', Cart.removeCartItems);

}
