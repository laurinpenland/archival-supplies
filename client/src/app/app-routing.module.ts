import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'add-product', loadChildren: () => import('./views/add-product/add-product.module').then(m => m.AddProductModule) },
  { path: 'product/:_id', loadChildren: () => import('./views/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'update-product--form', loadChildren: () => import('./shared/update-product-form/update-product-form.module').then(m => m.UpdateProductFormModule) },
  { path: 'product-type/:productType', loadChildren: () => import('./views/product-type/product-type.module').then(m => m.ProductTypeModule) },
  { path: 'thanks', loadChildren: () => import('./views/thanks/thanks.module').then(m => m.ThanksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
