const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  email: { type: String, required: true },
  shoes: { type: Object, required: true },
  size: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

Cart = mongoose.model("Cart", cartSchema);

getCart = req => {
  return new Promise((resolve, reject) => {
    Cart.find({ email: req.body.email }).then(cart => {
      if (cart.length > 0) {
        return resolve(cart);
      }
      return reject("Cart not found for this customer");
    });
  });
};

addToCart = req => {
  return new Promise((resolve, reject) => {
    Cart.findOneAndUpdate(
      {
        email: req.body.cart.email,
        shoes: req.body.cart.shoes,
        size: req.body.cart.size
      },
      { $inc: { quantity: req.body.cart.quantity } },
      { new: true },
      (err, doc) => {
        if (err) {
          return reject("Something wrong when updating data!");
        } else if (doc == null) {
          const cart = new Cart(req.body.cart); //if the item not exist in cart add new item
          cart.save();
          return resolve(true);
        }
        return resolve(true); //if the item exist in cart just update
      }
    );
  });
};

deleteCartByEmail = email => {
  return new Promise((resolve, reject) => {
    Cart.deleteMany({ email: email }).then(result => {
      console.log("Cart deleted");
      return resolve();
    });
  });
};

module.exports = {
  getCart: getCart,
  addToCart: addToCart,
  deleteCartByEmail: deleteCartByEmail
};
