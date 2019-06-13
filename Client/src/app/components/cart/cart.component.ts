import { Component, OnInit } from "@angular/core";
import { Shoes } from "src/app/model/ShoesModel";
import { ActivatedRoute, Router } from "@angular/router";
import { ShoesService } from "src/app/services/shoes.service";
import { CartService } from "src/app/services/cart.service";
import { __await } from "tslib";
import { LoginService } from "src/app/services/login.service";
declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private router: Router,
    private loginService: LoginService
  ) {}
  cart: any = [];
  singleshoe: Shoes;
  shoes: Shoes[] = [];
  totalPrice: number = 0;

  ngOnInit() {
    this.loginService.getUserDetails().subscribe(data => {
      if (data.email) {
        this.cartService.getCartByEmail(data.email).subscribe(data => {
          if (data) {
            this.cart = data;
            this.subtotal();
          }
        });
      }
    });
  }

  subtotal() {
    this.cart.forEach(item => {
      this.totalPrice += item.shoes.price * item.quantity;
    });
  }

  buyNow(cart) {
    if (cart) {
      this.cartService.buyNow(cart).subscribe(data => {
        if (data) {
          this.router.navigate(["/"]);
        }
      });
    }
  }
}
