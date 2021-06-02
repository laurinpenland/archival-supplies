import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProductFormRoutingModule } from './update-product-form-routing.module';
import { UpdateProductFormComponent } from './update-product-form.component';

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
import { IProduct } from 'src/app/core/products.model';
import { ProductsService } from 'src/app/core/products.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [UpdateProductFormComponent],
  imports: [
    CommonModule,
    UpdateProductFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ],
  exports: [UpdateProductFormComponent]
})
export class UpdateProductFormModule {}
