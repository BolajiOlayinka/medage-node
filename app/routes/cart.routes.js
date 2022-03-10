module.exports = (app) => {
    const Cart = require('../controllers/cart.controller.js');
    const { requireSignin, userMiddleware } = require('../utils/middleware');
    // Add items to cart
    app.post('/user/cart/addtocart',requireSignin,userMiddleware, Cart.addItemToCart);

    // Get Items in a cart
    app.get('/user/cart/getcart',requireSignin,userMiddleware, Cart.getCartItems);

    // Delete an Item in Cart
    app.delete('/user/cart/:id', Cart.removeCartItems);

}
