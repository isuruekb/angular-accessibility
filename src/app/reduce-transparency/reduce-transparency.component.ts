import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce-transparency',
  templateUrl: './reduce-transparency.component.html',
  styleUrls: ['./reduce-transparency.component.scss']
})
export class ReduceTransparencyComponent implements OnInit {

  color = "gold";

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(color: string): void {
    this.color = color;
  }


  Check01:boolean=false;
  Check03:boolean=false;
  Check05:boolean=false;
  Check07:boolean=false;
  Check1:boolean=false;

  changeTo01(){
    this.Check01=true;
    this.Check03=false;
    this.Check05=false;
    this.Check07=false;
    this.Check1=false;
  }

  changeTo03(){
    this.Check01=false;
    this.Check03=true;
    this.Check05=false;
    this.Check07=false;
    this.Check1=false;
  }

  changeTo05(){
    this.Check01=false;
    this.Check03=false;
    this.Check05=true;
    this.Check07=false;
    this.Check1=false;
  }

  changeTo07(){
    this.Check01=false;
    this.Check03=false;
    this.Check05=false;
    this.Check07=true;
    this.Check1=false;
  }

  changeTo1(){
    this.Check01=false;
    this.Check03=false;
    this.Check05=false;
    this.Check07=false;
    this.Check1=true;
  }

}
