import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Customer } from "../model/CustomerModel";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  login(email, password) {
    return this.http.post<any>(
      `${this.url}/customer/login`,
      {
        email: email,
        password: password
      },
      { observe: "body" }
    );
  }

  getUserDetails() {
    return this.http.get<any>(`${this.url}/customer/getuserdetails`, {
      observe: "body",
      params: new HttpParams().append("token", localStorage.getItem("token"))
    });
  }

  register(formInputs) {
    return this.http.post<boolean>(`${this.url}/customer/register`, {
      email: formInputs.email,
      password: formInputs.password,
      firstname: formInputs.firstName,
      lastname: formInputs.lastName,
      city: formInputs.city,
      address: formInputs.address,
      postalcode: formInputs.postalcode,
      phone: formInputs.phone
    });
  }
}
