import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  isWrongPassword: boolean = false;
  ValidationFaild: boolean = false;
  emailAlreadyExist: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      city: ["", Validators.required],
      address: ["", Validators.required],
      postalcode: ["", Validators.required],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmpassword: ["", Validators.required]
    });

    $(".form")
      .find("input, textarea")
      .on("keyup blur focus", function(e) {
        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.addClass("active highlight");
          }
        } else if (e.type === "blur") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.removeClass("highlight");
          }
        } else if (e.type === "focus") {
          if ($this.val() === "") {
            label.removeClass("highlight");
          } else if ($this.val() !== "") {
            label.addClass("highlight");
          }
        }
      });

    $(".tab a").on("click", function(e) {
      e.preventDefault();

      $(this)
        .parent()
        .addClass("active");
      $(this)
        .parent()
        .siblings()
        .removeClass("active");

      let target = $(this).attr("href");

      $(".tab-content > div")
        .not(target)
        .hide();

      $(target).fadeIn(600);
    });
  }

  loggedIn: boolean = false;
  login(email, password) {
    this.loginService.login(email, password).subscribe(data => {
      if (data.errorMessage) {
        this.isWrongPassword = true;
      } else {
        localStorage.setItem("token", data.toString());
        location.reload();
      }
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loginService.register(this.registerForm.value).subscribe(result => {
        if (result) {
          this.router.navigate(["/"]);
        } else {
          this.emailAlreadyExist = true;
        }
      });
    } else {
      this.ValidationFaild = true;
    }
  }
}
