import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
