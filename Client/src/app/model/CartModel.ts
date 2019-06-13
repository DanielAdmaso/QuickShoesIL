import { Shoes } from './ShoesModel';

export class Cart{
    _id;
    email:String;
    shoes:Shoes;
    size:number;
    quantity:number;

    constructor(_id,email,shoes,size,quantity) {
        this._id = _id;
        this.email = email;
        this.shoes = shoes;
        this.size = size;
        this.quantity = quantity;
    }
}