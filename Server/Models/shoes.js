const mongoose = require('mongoose');

const shoesSchema = mongoose.Schema({
    brand: { type: String, required: true },
    shoesid: { type: Number, required: true, unique: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true },
});

Shoes = mongoose.model('Shoes', shoesSchema);

getAllShoes = () => {
    return new Promise((resolve, reject) => {
        Shoes.find((err, shoes) => {
            if (err) return reject(err);
            console.log(shoes);
            return resolve(shoes);
        });
    })
}

module.exports = {
    getAllShoes: getAllShoes,
}
