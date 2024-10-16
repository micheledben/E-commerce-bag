import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  constructor(public appService: AppService, public cartService: CartService){}

  ngOnInit(): void {
  }
}
