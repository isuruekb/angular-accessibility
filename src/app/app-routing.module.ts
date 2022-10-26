/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { ColorContrastComponent } from './color-contrast/color-contrast.component';
import { ZoomInOutComponent } from './zoom-in-out/zoom-in-out.component';
import { ColorFilterComponent } from './color-filter/color-filter.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';
import { ReduceTransparencyComponent } from './reduce-transparency/reduce-transparency.component';


// TODO: #4. Define unique page titles
const routes: Routes = [
  { path: 'shop', component: ShopComponent, title: 'Angular Accessibility - Example' },
  { path: 'color-change', component: ColorChangeComponent },
  { path: 'color-contrast', component: ColorContrastComponent },
  { path: 'zoom', component: ZoomInOutComponent },
  { path: 'color-filter', component: ColorFilterComponent },
  { path: 'text-to-speech', component: TextToSpeechComponent },
  { path: 'reduce-transparency', component: ReduceTransparencyComponent },
  { path: '**', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
