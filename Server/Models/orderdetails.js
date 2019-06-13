const mongoose = require('mongoose');

const orderDetailsSchema = mongoose.Schema({
    orderid: { type: Number, required: true},
    shoesid: { type: Number, required: true},
    shoesSize: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);


module.exports = {}
