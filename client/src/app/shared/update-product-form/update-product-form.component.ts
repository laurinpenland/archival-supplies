import { Component, OnInit, Input } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.css']
})
export class UpdateProductFormComponent implements OnInit {
  @Input('product') product: IProduct;
  updateProductForm: FormGroup;
  productId: string;
  //selected: string;

  constructor(private ProductsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.updateProductForm = new FormGroup({
      productVendor: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      productNum: new FormControl("", [Validators.required]),
      packQuantity: new FormControl("", [Validators.required]),
      productType: new FormControl("", [Validators.required]),
      notes: new FormControl("", [Validators.maxLength(150)]),
      productUrl: new FormControl("", [Validators.required]),
      imageUrl: new FormControl("")

    });
  }

  updateForm() {
    const product: Partial<IProduct> = {
      vendor: this.updateProductForm.get('productVendor').value,
      description: this.updateProductForm.get('description').value,
      productNum: this.updateProductForm.get('productNum').value,
      packQuantity: this.updateProductForm.get('packQuantity').value,
      productType: this.updateProductForm.get('productType').value,
      notes: this.updateProductForm.get('notes').value,
      productUrl: this.updateProductForm.get('productUrl').value,
      imageUrl: this.updateProductForm.get('imageUrl').value
    }

    console.log(product);

    this.ProductsService.updateProduct(this.productId);

    this.router.navigate(['/thanks'], {skipLocationChange: true});
  }


}
