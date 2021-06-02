import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/products.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/products.service';
import { ProductCardModule } from 'src/app/shared/product-card/product-card.module';


@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  subscriptions: Subscription[];
  productType: string;
  products: IProduct[];

  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.subscriptions = [
      this.route.params.subscribe(params => {
        this.productType = params['productType'];
        console.log(this.productType);
      }),
      this.ProductsService.products$.subscribe((products: IProduct[]) => {
        this.products = products;
        console.log(products);
      })
    ];

  }


}
