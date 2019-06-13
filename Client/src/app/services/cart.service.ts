import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cart } from "../model/CartModel";
import { Shoes } from "../model/ShoesModel";
import { ShoesService } from "./shoes.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient, private shoesService: ShoesService) {}

  getCartByEmail(email) {
    return this.http.post<Cart[]>(`${this.url}/cart/getcart`, { email: email });
  }

  addToCart(email, shoesid, size, quantity) {
    let cart = {
      email: email,
      shoes: this.shoesService.getSingleShoeById(shoesid),
      size: size,
      quantity: quantity
    };
    return this.http.post<boolean>(`${this.url}/cart/addtocart`, {
      cart: cart
    });
  }

  buyNow(cart) {
    return this.http.post<boolean>(`${this.url}/cart/buyNow`, { cart: cart });
  }
}
