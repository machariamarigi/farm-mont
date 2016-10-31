import { Component, OnInit } from '@angular/core';

import { Plot } from '../services/plot'
import { PlotsService } from '../services/plots.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  plots: Plot[];
  errorMessage: string;
  
  constructor(
    private plotService: PlotsService
  ) { }

  ngOnInit() {
    this.plotService.getPlots()
      .subscribe(plots => this.plots = plots,
      error => this.errorMessage = <any>error
      );
  }

}
