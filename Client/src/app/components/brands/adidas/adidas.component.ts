import { Component, OnInit } from "@angular/core";
import { ShoesService } from "src/app/services/shoes.service";
import { Shoes } from "src/app/model/ShoesModel";
import { Router } from "@angular/router";

import "bootstrap/dist/css/bootstrap.css";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-adidas",
  templateUrl: "./adidas.component.html",
  styleUrls: ["./adidas.component.scss"]
})
export class AdidasComponent implements OnInit {
  constructor(private shoesService: ShoesService, private router: Router) {}
  allShoes: Shoes[];
  adidasShoes: Shoes[];
  ngOnInit() {
    if (localStorage.getItem("shoes")) {
      this.getAdidasShoes(JSON.parse(localStorage.getItem("shoes")));
    } else {
      this.shoesService.getAllShoes().subscribe(allShoes => {
        localStorage.setItem("shoes", JSON.stringify(allShoes));
        this.allShoes = allShoes;
        this.getAdidasShoes(allShoes);
      });
    }
  }

  getAdidasShoes(allShoes) {
    this.allShoes = allShoes.filter(item => {
      return item.brand == "Adidas";
    });
    this.adidasShoes = this.allShoes;
    localStorage.setItem("adidasShoes", JSON.stringify(this.allShoes));
  }

  filterItem(value) {
    this.allShoes = JSON.parse(localStorage.getItem("adidasShoes")).filter(
      item => item.model.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  addToCart(id) {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/singleShoes", id]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
