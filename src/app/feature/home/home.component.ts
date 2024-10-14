import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { BagInterface } from '../../interfaces/bag.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(public appService: AppService){}
  ngOnInit(): void {
    this.getNewProduct()
  }

  newProduct: BagInterface[] = []


  getNewProduct(){
    this.newProduct = this.appService.allBag.filter((product)=>{
      return product.new == true;
    })
  }
}
