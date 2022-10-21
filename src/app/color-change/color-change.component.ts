import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.scss']
})
export class ColorChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blueCheck:boolean=false;
  greenCheck:boolean=false;
  yellowCheck:boolean=false;

  changeToBlue(){
    this.blueCheck=true;
    this.greenCheck=false;
    this.yellowCheck=false;
  }

  changeToGreen(){
    this.greenCheck=true;
    this.yellowCheck=false;
    this.blueCheck=false;
  }

  changeToYellow(){
    this.yellowCheck=true;
    this.greenCheck=false;
    this.blueCheck=false;
  }

}
