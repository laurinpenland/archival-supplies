import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatPlaceholder, MatLabel, MatHint, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';
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
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ]
})
export class AddProductModule { }
