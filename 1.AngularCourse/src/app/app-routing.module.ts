import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, title: 'Welcome', },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  // { path: 'signup', component: SignUpComponent, title: 'SignUp Page', },
  // { path: 'admin', component: AdminPageComponent, title: 'Admin Page', 
  //   children: [
  //             {
  //               path: 'Products',
  //               component: ViewProductsComponent
  //             },
  //             {
  //               path:'details/:id',
  //               component: ProductDetailsComponent
  //             },
  //             {
  //               path:'editDetails',
  //               title: 'Admin Page | Update Product',
  //               component: NewProductComponent
  //             },
  //             {
  //               path:'newProduct',
  //               title: 'Admin Page | Add Product',
  //               component: NewProductComponent
  //             }

  //             // {
  //             //   path:'details/:id',
  //             //   component: ProductDetailsComponent
  //             // }
  //   ]
  // },
  // { path: 'home', component:,
  //   children: [

  //         {
  //             path: 'product',
  //             component: 
  //         },
  //         {
  //           path: 'details/:id',
  //           component: 
  //         },
  //         {
  //           path: 'cart',
  //           component: 
  //         }
  //         ]
  // },
  { path: '**', component: PageNotFoundComponent }  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
