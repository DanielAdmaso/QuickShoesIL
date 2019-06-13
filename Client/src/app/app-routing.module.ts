import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { ContactComponent } from './components/contact/contact.component';
import { NikeComponent } from './components/brands/nike/nike.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { SingleShoesComponent } from './components/single-shoes/single-shoes.component';

const routes: Routes = [
  {path:'',component:BrandsComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'cart',component:CartComponent},
  {path:'nike',component:NikeComponent},
  {path: 'singleShoes/:id',component:SingleShoesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
