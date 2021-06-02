import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/core/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
