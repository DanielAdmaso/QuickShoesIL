const mongoose = require("mongoose");
const CustomerModel = require("../Models/customer");
const StockModel = require("../Models/stock");
const CartModel = require("../Models/cart");

const ordersSchema = mongoose.Schema({
  customerEmail: { type: String, required: true },
  customerCity: { type: String, required: true },
  customerAddress: { type: String, required: true },
  customerPostalCode: { type: String },
  customerPhone: { type: String, required: true },
  date: { type: Date, default: Date.now(), required: true }
});

Order = mongoose.model("Order", ordersSchema);

const orderDetailsSchema = mongoose.Schema({
  orderid: { type: String, required: true },
  shoesid: { type: Number, required: true },
  shoesSize: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

OrderDetails = mongoose.model("OrderDetails", orderDetailsSchema);

buyNow = cart => {
  //get customer cart
  return new Promise((resolve, reject) => {
    createOrder(cart).then(orderId => {
      if (orderId) {
        creatOrderDetails(cart, orderId).then(orderDetailsCreated => {
          if (orderDetailsCreated) {
            StockModel.reduceStock(cart).then(stockUpdated => {
              if (stockUpdated) {
                CartModel.deleteCartByCustomerId(cart[0].customerId).then(
                  cartDeleted => {
                    return resolve(cartDeleted);
                  }
                );
              }
            });
          }
        });
      }
    });
  });
};

createOrder = cart => {
  return new Promise((resolve, reject) => {
    CustomerModel.findCustomerById(cart[0].customerId).then(customer => {
      const order = new Order({
        customerEmail: customer[0].email,
        customerCity: customer[0].city,
        customerAddress: customer[0].address,
        customerPostalCode: customer[0].postalcode,
        customerPhone: customer[0].phone
      });
      order.save().then(result => {
        if (result) {
          console.log("Order Created");
          return resolve(order._id);
        }
      });
    });
  });
};

creatOrderDetails = (cart, orderId) => {
  return new Promise((resolve, reject) => {
    cart.forEach(item => {
      const orderDetails = new OrderDetails({
        orderid: orderId,
        shoesid: item.shoes.shoesid,
        shoesSize: item.size,
        unitPrice: item.shoes.price,
        quantity: item.quantity
      });
      orderDetails.save().then(result => {
        if (result) {
          console.log("OrderDetails Created");
          return resolve(true);
        }
      });
    });
  });
};

module.exports = {
  buyNow: buyNow
};
