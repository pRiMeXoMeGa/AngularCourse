import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit {

  @Input() rating:number=0;
  cropWidth:number = 75;
  @Output() ratingEvent : EventEmitter<string> =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }
  onClick(){
    this.ratingEvent.emit(`rating is ${this.rating}`);
  }



}
