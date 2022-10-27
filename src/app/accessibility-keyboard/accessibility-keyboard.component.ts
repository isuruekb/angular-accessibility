import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility-keyboard',
  templateUrl: './accessibility-keyboard.component.html',
  styleUrls: ['./accessibility-keyboard.component.scss']
})
export class AccessibilityKeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  spaceKey:boolean=false;
  enterKey:boolean=false;
  oneKey:boolean=false;
  twoKey:boolean=false;
  threeKey:boolean=false;
  text1:boolean=false;

  changeTospaceKey(){
    this.spaceKey=true;
    this.enterKey=false;
    this.oneKey=false;
    this.twoKey=false;
    this.threeKey=false;
    // this.text1=true;
  }

  changeToenterKey(){
    this.spaceKey=false;
    this.enterKey=true;
    this.oneKey=false;
    this.twoKey=false;
    this.threeKey=false;
    // this.text1=true;
  }

  changeToNumpad1(){
    this.spaceKey=false;
    this.enterKey=false;
    this.oneKey=true;
    this.twoKey=false;
    this.threeKey=false;
  }

  changeToNumpad2(){
    this.spaceKey=false;
    this.enterKey=false;
    this.oneKey=false;
    this.twoKey=true;
    this.threeKey=false;
  }

  changeToNumpad3(){
    this.spaceKey=false;
    this.enterKey=false;
    this.oneKey=false;
    this.twoKey=false;
    this.threeKey=true;
  }



  // doSomething(){
  //   this.spaceKey=true;
  //   this.text1=true;
  //   // alert("works")
  // }

}
