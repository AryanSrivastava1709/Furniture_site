import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-serperate-prod-page',
  templateUrl: './serperate-prod-page.component.html',
  styleUrls: ['./serperate-prod-page.component.css'],
})
export class SerperateProdPageComponent implements OnInit {
  product: any;
  productId: number | any;
  loading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    const data = await this.fetchData();
    this.product = data.find((x) => x.id == this.productId);

    this.loading = false;
  }
  async fetchData(): Promise<any[]> {
    const response = await fetch(
      'https://mocki.io/v1/370e64f2-99ab-49de-bfe4-f5708a89edb8'
    );

    return await response.json();
  }
  showSuccess() {
    this.toastr.success('Item Added', 'Cart Notification');
  }
  addItem() {
    const isPresent = localStorage.getItem(JSON.stringify(this.productId));
    if (isPresent) {
      const curProd = JSON.parse(isPresent);
      var updatedProd = {
        ...curProd,
        quantity: curProd.quantity + 1,
      };
      localStorage.setItem(
        JSON.stringify(this.productId),
        JSON.stringify(updatedProd)
      );
    } else {
      var updatedProd = {
        ...this.product,
        quantity: 1,
      };
      localStorage.setItem(
        JSON.stringify(this.productId),
        JSON.stringify(updatedProd)
      );
    }
  }
}
