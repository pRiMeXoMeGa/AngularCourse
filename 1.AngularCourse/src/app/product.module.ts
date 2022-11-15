import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CovertToSpacesPipe } from './pipe/covert-to-spaces.pipe';
import { ProtectedAccessGuard } from './protected-access.guard';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CovertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path:'products', component: ProductListComponent, title: 'Product List'},
      { 
        path:'products/:id' , 
        canActivate:[ProtectedAccessGuard],
        component:ProductDetailComponent, 
        title:'Product Detail'
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
