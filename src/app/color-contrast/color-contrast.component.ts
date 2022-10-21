import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-contrast',
  templateUrl: './color-contrast.component.html',
  styleUrls: ['./color-contrast.component.scss']
})
export class ColorContrastComponent implements OnInit {

  color = "gold";

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(color: string): void {
    this.color = color;
  }


  Check20:boolean=false;
  Check40:boolean=false;
  Check60:boolean=false;
  Check80:boolean=false;
  Check100:boolean=false;

  changeTo20(){
    this.Check20=true;
    this.Check40=false;
    this.Check60=false;
    this.Check80=false;
    this.Check100=false;
  }

  changeTo40(){
    this.Check20=false;
    this.Check40=true;
    this.Check60=false;
    this.Check80=false;
    this.Check100=false;
  }

  changeTo60(){
    this.Check20=false;
    this.Check40=false;
    this.Check60=true;
    this.Check80=false;
    this.Check100=false;
  }

  changeTo80(){
    this.Check20=false;
    this.Check40=false;
    this.Check60=false;
    this.Check80=true;
    this.Check100=false;
  }

  changeTo100(){
    this.Check20=false;
    this.Check40=false;
    this.Check60=false;
    this.Check80=false;
    this.Check100=true;
  }

}
