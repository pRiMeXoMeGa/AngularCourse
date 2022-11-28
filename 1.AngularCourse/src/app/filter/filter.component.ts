import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit, OnChanges {

  listFilterr: string='star';
  @Input()
  displayDetail!: boolean;
  @Input()
  hitCount!:number;

  hitMsg:string='';

  constructor() { }

  @ViewChild('filterElementReff')
  filterElementRef!: ElementRef;
  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges):void{
    if(changes['hitCount']&& !changes['hitCount'].currentValue){
      this.hitMsg='No matches found';
    }
    else{
      this.hitMsg = 'hits:' + this.hitCount;
    }
  }
  ngAfterViewInit(): void {
    if(this.filterElementRef.nativeElement){
      this.filterElementRef.nativeElement.focus();
    }
  }

}
