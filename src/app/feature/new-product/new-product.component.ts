import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AppService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit{
  constructor(public cartService: CartService, public appService: AppService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.appService.getNewProduct();
  }
}
