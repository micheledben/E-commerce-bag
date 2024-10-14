import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { HomeComponent } from './feature/home/home.component';
import { ProductsComponent } from './feature/products/products.component';
import { ProductDetailComponent } from './feature/products/product-detail/product-detail.component';

import { MenubarModule } from 'primeng/menubar';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CommonModule } from '@angular/common';
import { CartComponent } from './feature/cart/cart.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TagModule,
    AnimateOnScrollModule,
    CommonModule,
    ScrollTopModule,
    BrowserAnimationsModule,
    AvatarModule,
    BadgeModule,
    TooltipModule,
    InputTextModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
