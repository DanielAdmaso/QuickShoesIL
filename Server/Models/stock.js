const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  shoesid: { type: Number, required: true },
  shoesSize: { type: Number, required: true },
  stock: { type: Number, required: true }
});

Stock = mongoose.model("Stock", stockSchema);

reduceStock = cart => {
  return new Promise((resolve, reject) => {
    cart.forEach(item => {
      Stock.findOneAndUpdate(
        { shoesid: item.shoes.shoesid, shoesSize: item.size },
        { $inc: { stock: item.quantity * -1 } },
        { new: true },
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating stock!");
            return reject();
          } else if (doc == null) {
            //if the item not exist in stock add new item
            console.log("item out of stock!");
            return resolve(false);
          }
          console.log("stock updated!"); //if the item exist in cart update
          return resolve(true);
        }
      );
    });
  });
};

module.exports = {
  reduceStock: reduceStock
};

// module.exports = mongoose.model('Stock', stockSchema);
