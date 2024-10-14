import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(public cartService: CartService){}

    ngOnInit() {
    }


    numberObjectInCart(){
      return String(this.cartService.allCartProducts.length)
    }
}
