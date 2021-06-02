import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductCardModule } from 'src/app/shared/product-card/product-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatPlaceholder, MatLabel, MatHint, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { UpdateProductFormModule } from 'src/app/shared/update-product-form/update-product-form.module';



@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    ProductCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    UpdateProductFormModule
  ]
})
export class ProductDetailModule { }
