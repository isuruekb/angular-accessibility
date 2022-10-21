import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss']
})
export class ColorFilterComponent implements OnInit {

  color = 'gold';

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(color: string): void {
    this.color = color;
  }

}
