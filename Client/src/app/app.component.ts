import { Component, OnInit } from "@angular/core";
import { ShoesService } from "./services/shoes.service";
import { Shoes } from "./model/ShoesModel";
import "bootstrap/dist/css/bootstrap.css";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Angular";
  constructor(private shoesService: ShoesService) {}

  publicEmail: string;
  ngOnInit() {}
}
