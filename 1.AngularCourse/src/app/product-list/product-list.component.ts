import { filter, Subscription } from 'rxjs';
import { ApiServiceService } from './../service/api-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Product List';
  toggleImageBtn: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any={};
  private _listFilter: string= '';
  filteredProducts: any={};
  errorMsg: any;
  sub!: Subscription;

  get listFilter(): string{
    return this._listFilter;
    
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  constructor( private apiService: ApiServiceService) {
   }

  ngOnInit(): void {
    this.sub = this.apiService.getProducts().subscribe({
        next: (res:any) => {
            this.products = res;
            this.filteredProducts = this.products.products;
        },
        error: err => this.errorMsg = err
      }
    )
  }

  toggleImage(): void{
    this.toggleImageBtn = !this.toggleImageBtn;
  }

  performFilter(filterBy:string):any{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.products.filter((product:any)=>
        product.brand.toLocaleLowerCase().includes(filterBy));
   }

  onRatingEvent(msg:string):void{
    this.pageTitle = 'Product List: ' + msg;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
