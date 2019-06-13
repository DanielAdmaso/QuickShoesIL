import { Component, OnInit } from "@angular/core";
import { Shoes } from "src/app/model/ShoesModel";
import { Router, ActivatedRoute } from "@angular/router";
import { ShoesService } from "src/app/services/shoes.service";
import { CartService } from "src/app/services/cart.service";
import { LoginService } from "src/app/services/login.service";
declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-single-shoes",
  templateUrl: "./single-shoes.component.html",
  styleUrls: ["./single-shoes.component.scss"]
})
export class SingleShoesComponent implements OnInit {
  singleshoe: Shoes;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoesService: ShoesService,
    private cartService: CartService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.singleshoe = this.shoesService.getSingleShoeById(+params["id"]); // (+) converts string 'id' to a number
    });
  }

  checkprice(id, price) {
    let tempprice = parseInt($("#" + id).val()) * price;
    return tempprice;
  }

  addToCart(shoesId, size, quantity) {
    if (localStorage.getItem("token")) {
      this.loginService.getUserDetails().subscribe(data => {
        this.cartService
          .addToCart(data._id, shoesId, size, quantity)
          .subscribe(data => {
            if (data) {
              this.router.navigate(["/cart"]);
            }
          });
      });
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
