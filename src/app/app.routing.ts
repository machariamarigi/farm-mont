import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SinglePlotComponent } from './single-plot/single-plot.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'plot/:id', component: SinglePlotComponent}
];

export const APP_ROUTING_PROVIDERS: any = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRouting { }