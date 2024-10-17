import { Injectable } from '@angular/core';
import { BagInterface } from '../interfaces/bag.interface';
import { AppService } from '../app.service';


@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private appService: AppService) {}

  allCartProducts: BagInterface[] = [];
  totalExpense = 0;

  addToCart(product: BagInterface) {
    let findedProduct = this.allCartProducts.find((i) => i.id == product.id);
    if (findedProduct) {
      findedProduct.quantity!++;
    } else {
      this.allCartProducts.push({ ...product, quantity: 1 });
      console.log(product);
    }
    this.totalExpenseCart()
  }

  deleteToCart(product: BagInterface) {
    for (let i = 0; i < this.allCartProducts.length; i++) {
      if (this.allCartProducts[i].id == product.id) {
        this.allCartProducts.splice(i, 1);
      }
    }
    this.totalExpenseCart()
  }

  totalExpenseCart() {
    this.totalExpense = this.allCartProducts.reduce(
      (somma, product) => somma + product.price * product.quantity!,
      0
    );
    console.log(this.totalExpense)
  }

  allFalse(){
    for (let i = 0; i < this.appService.allBag.length; i++) {
      this.appService.allBag[i].inCart = false;
    }
  }

  incrementQuantity(id: number) {
    let product = this.allCartProducts.find((i) => i.id == id);
    if (product) {
      product.quantity++;
    }
    this.totalExpenseCart();
  }

  decrementQuantity(id: number) {
    let product = this.allCartProducts.find((i) => i.id == id);
    if (product) {
      product.quantity--;
    }
    this.totalExpenseCart();
  }

}
