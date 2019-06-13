import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Customer } from "src/app/model/CustomerModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  // loggedIn: boolean = JSON.parse(localStorage.getItem("loggedIn")) || false;
  userName: string;
  constructor(private loginService: LoginService, private router: Router) {
    if (localStorage.getItem("token")) {
      this.loginService.getUserDetails().subscribe(data => {
        this.userName = data.firstname;
      });
    }
  }

  ngOnInit() {
    if (screen && screen.width > 900) {
      window.onscroll = function() {
        scrollFunction();
      };
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("navbar").style.margin = "0";
      } else {
        document.getElementById("navbar").style.margin = "3%";
      }
    }
  }

  logout() {
    localStorage.removeItem("token");
    location.reload();
  }
}
