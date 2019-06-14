import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Customer } from "src/app/model/CustomerModel";
import { Router } from "@angular/router";
declare var jquery: any;
declare let $: any;

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

    $(".navbar-collapse a").click(function() {
      $(".navbar-collapse").hide();
    });
    $(".navbar-collapse span").click(function() {
      $(".navbar-collapse").hide();
    });

    $("button").click(function() {
      if ($("#navbarNavAltMarkup").css("display") == "none") {
        $("#navbarNavAltMarkup").css("display", "block");
      } else {
        $("#navbarNavAltMarkup").css("display", "none");
      }
    });

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
