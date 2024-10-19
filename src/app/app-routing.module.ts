import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ProductsComponent } from './feature/products/products.component';
import { ProductDetailComponent } from './feature/products/product-detail/product-detail.component';
import { CartComponent } from './feature/cart/cart.component';
import { NewProductComponent } from './feature/new-product/new-product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'new-product', component: NewProductComponent},
  {path: 'new-product/:id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
