import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app.service';
import { BagInterface } from '../../../interfaces/bag.interface';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private appService: AppService, public cartService: CartService){}

  productId: number | undefined;
  product: BagInterface | undefined;


  ngOnInit(): void {
    this.openDetailProduct()
    this.switchURL()
    }

  openDetailProduct(){
    this.productId = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')) : undefined;
    console.log(this.productId);
    if (this.productId) {
      this.product = this.appService.allBag[this.productId - 1]
    }
  }

  switchURL(){
    this.route.params.subscribe((params: any) => {
      console.log(params)
    })
   }

}
