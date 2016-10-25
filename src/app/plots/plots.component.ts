import { Component, OnInit } from '@angular/core';

import { Plot } from '../services/plot'
import { PlotsService } from '../services/plots.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {
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