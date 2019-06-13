export class Shoes {

    shoesid: number;
    brand: String;
    model: string;
    price: number;
    imgUrl: string;

    constructor(shoesid, brand, model, price, imgUrl) {
        this.shoesid = shoesid;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}