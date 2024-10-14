import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { BagInterface } from '../../interfaces/bag.interface';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  constructor(public appService: AppService, private router: Router, public cartService: CartService){}

  ngOnInit(): void {
  }
}
