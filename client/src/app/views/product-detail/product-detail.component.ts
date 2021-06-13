import { Component, OnInit, Input } from '@angular/core';
import { ProductCardModule } from 'src/app/shared/product-card/product-card.module';
import { IProduct } from 'src/app/core/products.model';
import { ProductsService } from 'src/app/core/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { UpdateProductFormModule } from 'src/app/shared/update-product-form/update-product-form.module';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  subscriptions: Subscription[];
  productId: string;


  constructor(private route: ActivatedRoute, private ProductsService: ProductsService, private router: Router) {}
  selected: string;

  deleteProduct() {
    this.ProductsService.deleteProduct(this.productId);

    this.router.navigate(['/thanks'], {skipLocationChange: true});
  }

    ngOnInit(): void {
        this.subscriptions = [
          this.route.params.subscribe(params => {
            this.productId = params['_id'];
          }),
          this.ProductsService.products$.subscribe((products: IProduct[]) => {
            for (let p of products) {
              //if id matches, then assign it to product
              if (p._id == this.productId) {
                this.product = p;
              }
              console.log(this.productId);

            }
          })
        ];
      }





}
