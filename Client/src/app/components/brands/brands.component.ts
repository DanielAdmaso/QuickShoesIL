import { Component, OnInit } from "@angular/core";
import { ShoesService } from "src/app/services/shoes.service";

@Component({
  selector: "app-brands",
  templateUrl: "./brands.component.html",
  styleUrls: ["./brands.component.scss"]
})
export class BrandsComponent implements OnInit {
  constructor(private shoesService: ShoesService) {}

  ngOnInit() {
    this.shoesService.getAllShoes().subscribe(allShoes => {
      localStorage.setItem("shoes", JSON.stringify(allShoes));
    });
  }
}
