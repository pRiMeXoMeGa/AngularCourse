import { FilterComponent } from 'src/app/filter/filter.component';
import { filter, Subscription } from 'rxjs';
import { ApiServiceService } from './../service/api-service.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {

  pageTitle: string = 'Product List';
  toggleImageBtn: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any={};
  private _listFilter: string= '';
  filteredProducts: any={};
  errorMsg: any;
  sub!: Subscription;
  filterName:string='start';
  includeDetail: boolean = true;

  @ViewChild('filterElementRef')
  filterElementRef!: ElementRef;

  @ViewChild(FilterComponent) filterComponent!: FilterComponent;

  childListFilter:string='';

  @ViewChildren(NgModel)
  inputElementRef!: QueryList<ElementRef>;

  get listFilter(): string{
    return this._listFilter;
    
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  constructor(private apiService: ApiServiceService) {
   }


  ngAfterViewInit(): void {
    this.childListFilter = this.filterComponent.listFilterr;
    
    if(this.filterElementRef.nativeElement){
      this.filterElementRef.nativeElement.focus();
      // console.log(this.inputElementRef);
    }
  }
  ngOnInit(): void {
    this.sub = this.apiService.getProducts().subscribe({
        next: (res:any) => {
            this.products = res;
            this.filteredProducts = this.products.products;
        },
        error: err => this.errorMsg = err,
        // complete: it is a other optional output
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

  // onFilterChange(filter:string): void{
  //   this.listFilter = filter;
  //   this.performFilter(this.listFilter);
  // }

  onRatingEvent(msg:string):void{
    this.pageTitle = 'Product List: ' + msg;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
