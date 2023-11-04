import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products: any[] = [];
  loading: boolean = false;
  async ngOnInit(): Promise<void> {
    this.loading = true;
    const data = await this.fetchData();
    this.products = data;
    console.log(this.products);
    this.loading = false;
  }
  async fetchData(): Promise<any[]> {
    const response = await fetch(
      'https://mocki.io/v1/ed534df7-af49-4887-93e0-eea668181abc'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  }
}
