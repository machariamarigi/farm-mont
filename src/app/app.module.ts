import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING_PROVIDERS, AppRouting } from './app.routing'
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlotsService } from './services/plots.service';
import { SinglePlotComponent } from './single-plot/single-plot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { PlotsComponent } from './plots/plots.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutUsComponent,
    SinglePlotComponent,
    NavbarComponent,
    SplashComponent,
    PlotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [
    PlotsService,
    APP_ROUTING_PROVIDERS
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
