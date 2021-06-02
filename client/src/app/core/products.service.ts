import { Injectable } from '@angular/core';
import { IProduct } from './products.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products: BehaviorSubject<IProduct[]> = new BehaviorSubject([]);
  products$: Observable<IProduct[]> = this._products.asObservable();


  constructor(private http: HttpClient) {
  this.loadProducts();
  }

  private loadProducts(): void {
     this.http.get('api/getAllProducts').subscribe((response) => {
       this._products.next(response['result']);
     });
  }

  
  addProduct(newProduct: Partial<IProduct>) {
    console.log(`New product description = ${newProduct}`);

    this.http.post('api/addProduct', newProduct).subscribe((response) => {
      console.log(response);
      this.loadProducts();
    });

  }

  deleteProduct(productId: string) {
    this.http.post('api/deleteProduct', {_id: productId}).subscribe((response) => {
      console.log(response);
      this.loadProducts();
    });
  }

  updateProduct(productId: string) {
    this.http.post('api/updateProduct', {_id: productId}).subscribe((response) => {
      console.log(response);
      this.loadProducts();
    });
  }

}
