const express = require("express");
const router = express.Router();
const CartModel = require("../Models/cart");
const OrderModel = require("../Models/orders");

router.post("/getcart", (req, res) => {
  CartModel.getCart(req)
    .then(cart => {
      if (cart) {
        res.status(200).send(cart);
      }
    })
    .catch(err => {
      res.status(204).send(err);
    });
});

router.post("/addtocart", (req, res) => {
  CartModel.addToCart(req)
    .then(result => {
      if (result) {
        res.status(200).send(true);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(200).send(false);
    });
});

router.post("/buyNow", (req, res) => {
  OrderModel.buyNow(req.body.cart).then(result => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(204).send(result);
    }
  });
});

module.exports = router;
