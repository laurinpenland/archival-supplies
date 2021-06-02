import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [{ path: '', component: ProductDetailComponent }];
//add new route with product id? i don't think so
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailRoutingModule { }
