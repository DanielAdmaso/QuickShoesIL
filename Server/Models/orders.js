const mongoose = require("mongoose");
const CustomerModel = require("../Models/customer");
const StockModel = require("../Models/stock");
const CartModel = require("../Models/cart");

const ordersSchema = mongoose.Schema({
  orderid: { type: Number, required: true, unique: true },
  customerEmail: { type: String, required: true },
  customerCity: { type: String, required: true },
  customerAddress: { type: String, required: true },
  customerPostalCode: { type: String },
  customerPhone: { type: String, required: true },
  date: { type: Date, default: Date.now(), required: true }
});

Order = mongoose.model("Order", ordersSchema);

const orderDetailsSchema = mongoose.Schema({
  orderid: { type: Number, required: true },
  shoesid: { type: Number, required: true },
  shoesSize: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

OrderDetails = mongoose.model("OrderDetails", orderDetailsSchema);

buyNow = cart => {
  //get customer cart
  let orderIdRandomNumber = Math.floor(Math.random() * (1000 - 1)) + 1;
  let p = new Promise((resolve, reject) => {
    createOrder(cart, orderIdRandomNumber);
    creatOrderDetails(cart, orderIdRandomNumber);
    StockModel.reduceStock(cart);
    CartModel.deleteCartByEmail(cart[0].email);
  }).then(result => {
    return true;
  });
};

createOrder = (cart, orderIdRandomNumber) => {
  return new Promise((resolve, reject) => {
    CustomerModel.findCustomerByEmail(cart[0].email).then(customer => {
      const order = new Order({
        orderid: orderIdRandomNumber,
        customerEmail: customer[0].email,
        customerCity: customer[0].city,
        customerAddress: customer[0].address,
        customerPostalCode: customer[0].postalcode,
        customerPhone: customer[0].phone
      });
      order.save().then(result => {
        if (result) {
          console.log("Order Created");
          return resolve();
        }
      });
    });
  });
};

creatOrderDetails = (cart, orderIdRandomNumber) => {
  return new Promise((resolve, reject) => {
    cart.forEach(item => {
      const orderDetails = new OrderDetails({
        orderid: orderIdRandomNumber,
        shoesid: item.shoes.shoesid,
        shoesSize: item.size,
        unitPrice: item.shoes.price,
        quantity: item.quantity
      });
      orderDetails.save().then(result => {
        if (result) {
          console.log("OrderDetails Created");
          return resolve();
        }
      });
    });
  });
};

module.exports = {
  buyNow: buyNow
};
