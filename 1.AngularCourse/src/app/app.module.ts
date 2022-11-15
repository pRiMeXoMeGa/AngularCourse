import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
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
        ]), 
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
