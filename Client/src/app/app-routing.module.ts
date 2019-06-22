import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrandsComponent } from "./components/brands/brands.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NikeComponent } from "./components/brands/nike/nike.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { SingleShoesComponent } from "./components/single-shoes/single-shoes.component";
import { AdidasComponent } from "./components/brands/adidas/adidas.component";
import { PumaComponent } from "./components/brands/puma/puma.component";
import { VansComponent } from "./components/brands/vans/vans.component";
import { AsicsComponent } from "./components/brands/asics/asics.component";
import { AllstarComponent } from "./components/brands/allstar/allstar.component";

const routes: Routes = [
  { path: "", component: BrandsComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "cart/:id", component: CartComponent },
  { path: "cart", component: CartComponent },
  { path: "nike", component: NikeComponent },
  { path: "adidas", component: AdidasComponent },
  { path: "vans", component: VansComponent },
  { path: "puma", component: PumaComponent },
  { path: "asics", component: AsicsComponent },
  { path: "allstar", component: AllstarComponent },
  { path: "singleShoes/:id", component: SingleShoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
