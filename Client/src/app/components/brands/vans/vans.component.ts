import { Component, OnInit } from "@angular/core";
import { ShoesService } from "src/app/services/shoes.service";
import { Shoes } from "src/app/model/ShoesModel";
import { Router } from "@angular/router";

import "bootstrap/dist/css/bootstrap.css";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-vans",
  templateUrl: "./vans.component.html",
  styleUrls: ["./vans.component.scss"]
})
export class VansComponent implements OnInit {
  constructor(private shoesService: ShoesService, private router: Router) {}
  // searchShoes:Shoes[]
  allShoes: Shoes[];
  vansShoes: Shoes[];
  ngOnInit() {
    if (localStorage.getItem("shoes")) {
      this.getVansShoes(JSON.parse(localStorage.getItem("shoes")));
    } else {
      this.shoesService.getAllShoes().subscribe(allShoes => {
        localStorage.setItem("shoes", JSON.stringify(allShoes));
        this.allShoes = allShoes;
        this.getVansShoes(allShoes);
      });
    }

    $("#inpt_search").on("focus", function() {
      $(this)
        .parent("label")
        .addClass("active");
    });

    $("#inpt_search").on("blur", function() {
      if ($(this).val().length == 0)
        $(this)
          .parent("label")
          .removeClass("active");
    });
  }

  getVansShoes(allShoes) {
    this.allShoes = allShoes.filter(item => {
      return item.brand == "Vans";
    });
    this.vansShoes = this.allShoes;
    localStorage.setItem("vansShoes", JSON.stringify(this.allShoes));
  }

  filterItem(value) {
    this.allShoes = JSON.parse(localStorage.getItem("vansShoes")).filter(
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
