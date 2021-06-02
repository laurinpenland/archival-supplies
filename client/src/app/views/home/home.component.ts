import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/products.model';
import { ProductsService } from 'src/app/core/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private ProductsService: ProductsService) {
    ProductsService.products$.subscribe(products => {
      this.products = products;
      console.log(this.products.length);
    });}

  ngOnInit(): void {}

}
