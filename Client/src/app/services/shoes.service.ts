import { Injectable } from "@angular/core";
import { Shoes } from "../model/ShoesModel";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShoesService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getAllShoes() {
    // let promise = new Promise((resolve, reject) => {
    // if (!localStorage.getItem("shoes")) {
    return this.http.get<Shoes[]>(`${this.url}/shoes/getAllShoes`);
    // .subscribe(data => {
    // localStorage.setItem("shoes", JSON.stringify(data));
    // resolve(data);
    // });
    //   }
    // });
    // return promise;
  }

  getSingleShoeById(id): Shoes {
    let tempArr = JSON.parse(localStorage.getItem("shoes")).filter(item => {
      return id === item.shoesid;
    });
    return tempArr[0];
  }

  getShoesByCart(carts): Shoes[] {
    let tempArr: Shoes[] = [];
    for (let i = 0; i < carts.length; i++) {
      tempArr.push(this.getSingleShoeById(carts[i].shoesid));
    }
    return tempArr;
  }
}
