import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public publicc:string = "public";
  private privatee: string = "priavte";
  static staticc:string = "static";
  protected protectedd:string="protected";


  constructor() { }

  ngOnInit(): void {
    let addOne1 = (num:any) => (num+1);
    var addOne2 = (num:any) => num+1;
    var addOne3 = (num1:any) => num1+1;
    let addOne4 = (num2:any) => {num2+1};
    console.log(addOne1(1)+" $ "+ addOne2(1)+" $ "+ addOne3(1)+" $ "+ addOne4(1));
  }

}
