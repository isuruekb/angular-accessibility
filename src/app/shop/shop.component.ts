
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  quantity = 11;

  // TODO: #7. Create selectable controls with Angular Material
  fillings: string[] = ['Invert Colours', 'Colour Filter', 'Increase Contrast', 'Reduce Transparency', 'Zoom in Zoom Out', 'Text to voice'];
  selectedFillings: string[] = [];

  // TODO: #11. Announce changes with LiveAnnouncer
  constructor(private liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void { }

  counter(i: number): Array<number> {
    return new Array(i);
  }

  

  

  phara = "When websites and web tools are properly designed and coded, people with disabilities can use them. However, currently many sites and tools are developed with accessibility barriers that make them difficult or impossible for some people to use. Making the web accessible benefits individuals, businesses, and society. International web standards define what is needed for accessibility.";
  zoom = "this box will zoom in when you hover mouse pointer on it";
}
