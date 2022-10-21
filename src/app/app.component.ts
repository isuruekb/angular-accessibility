
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Assessbility';
  isDark: boolean | undefined;
  bodyStyles: CSSStyleDeclaration | undefined;
}
