import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  constructor(public appService: AppService, public cartService: CartService){}
  ngOnInit(): void {
  }
}
