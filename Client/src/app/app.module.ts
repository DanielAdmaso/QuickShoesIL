import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrandsComponent } from "./components/brands/brands.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NikeComponent } from "./components/brands/nike/nike.component";
import { ShoesService } from "./services/shoes.service";
import { AboutComponent } from "./components/about/about.component";
import { SearchBrandsComponent } from "./components/search-brands/search-brands.component";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "./services/login.service";
import { CartComponent } from "./components/cart/cart.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmEqualValidatorDirective } from "./Shared/must-much";
import { SingleShoesComponent } from "./components/single-shoes/single-shoes.component";
import { AdidasComponent } from "./components/brands/adidas/adidas.component";
import { PumaComponent } from "./components/brands/puma/puma.component";
import { VansComponent } from "./components/brands/vans/vans.component";
import { AllstarComponent } from "./components/brands/allstar/allstar.component";
import { AsicsComponent } from "./components/brands/asics/asics.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandsComponent,
    FooterComponent,
    ContactComponent,
    NikeComponent,
    AboutComponent,
    SearchBrandsComponent,
    LoginComponent,
    CartComponent,
    ConfirmEqualValidatorDirective,
    SingleShoesComponent,
    AdidasComponent,
    PumaComponent,
    VansComponent,
    AllstarComponent,
    AsicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
