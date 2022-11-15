import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string= "Product Details";
  product: any={};
  btnStyle: number = 80;
  constructor(private activedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id= Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.pageTitle +=`: ${id}`
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

}
