import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeRoutingModule } from './product-type-routing.module';
import { ProductTypeComponent } from './product-type.component';
import { ProductCardModule } from 'src/app/shared/product-card/product-card.module';


@NgModule({
  declarations: [ProductTypeComponent],
  imports: [
    CommonModule,
    ProductTypeRoutingModule,
    ProductCardModule
  ]
})
export class ProductTypeModule { }
