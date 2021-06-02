import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProductFormComponent } from './update-product-form.component';

const routes: Routes = [{ path: '', component: UpdateProductFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProductFormRoutingModule { }
