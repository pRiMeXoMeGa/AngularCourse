import { ProtectedAccessGuard } from './protected-access.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'products', component: ProductListComponent, title: 'Product List'},
  { 
    path:'products/:id' , 
    canActivate:[ProtectedAccessGuard],
    component:ProductDetailComponent, 
    title:'Product Detail'
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
