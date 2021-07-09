import { Component, OnInit } from '@angular/core';
import { FormsModule,
         ReactiveFormsModule,
         FormGroup,
         FormControl,
         Validators,
         FormArray
        } from '@angular/forms';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { IProduct } from 'src/app/core/products.model';
import { ProductsService } from 'src/app/core/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productsService: ProductsService, private router: Router) {}

  addProductForm: FormGroup;
  selected: string;
  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      productVendor: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      productNum: new FormControl("", [Validators.required]),
      packQuantity: new FormControl("", [Validators.required]),
      productType: new FormControl("null", [Validators.required]),
      notes: new FormControl("", [Validators.maxLength(150)]),
      productUrl: new FormControl("", [Validators.required]),
      imageUrl: new FormControl("")

    });
  }

  submitForm() {
    const product: Partial<IProduct> = {
      vendor: this.addProductForm.get('productVendor').value,
      description: this.addProductForm.get('description').value,
      productNum: this.addProductForm.get('productNum').value,
      packQuantity: this.addProductForm.get('packQuantity').value,
      productType: this.selected,
      notes: this.addProductForm.get('notes').value,
      productUrl: this.addProductForm.get('productUrl').value,
      imageUrl: this.addProductForm.get('imageUrl').value
    }

    console.log(product);

    this.productsService.addProduct(product);

    this.router.navigate(['/thanks'], {skipLocationChange: true});
  }

}
