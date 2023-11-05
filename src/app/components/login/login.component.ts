import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loading: boolean = false;
  cart: any[] = [];
  totalPrice: number = 0;
  ngOnInit(): void {
    this.totalPrice = 0;
    this.getProd();
  }
  getProd() {
    this.loading = true;
    this.totalPrice = 0;
    this.cart = [];
    const localStorageKeys = Object.keys(localStorage);
    // console.log(localStorageKeys);
    for (let i = 0; i < localStorageKeys.length; i++) {
      const element = localStorage.getItem(localStorageKeys[i]);
      if (element) {
        const prod = JSON.parse(element);
        this.cart.push(prod);
        this.totalPrice += prod.price * prod.quantity;
      }
    }
    this.loading = false;
  }
  removeProd(key: any) {
    const prodKey = key.id.toString();
    const isPresent = localStorage.getItem(JSON.stringify(prodKey));
    if (isPresent) {
      localStorage.removeItem(JSON.stringify(prodKey));
      this.getProd();
    }
  }
  isCartEmpty(): boolean {
    return this.cart.length === 0;
  }
}
