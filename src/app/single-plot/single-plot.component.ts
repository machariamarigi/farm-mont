import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Plot } from '../services/plot';
import { PlotsService } from '../services/plots.service';

@Component({
  selector: 'app-single-plot',
  templateUrl: './single-plot.component.html',
  styleUrls: ['./single-plot.component.css']
})
export class SinglePlotComponent implements OnInit {
  plot: Plot;
  id: any;
  paramsSub: any;
  errorMessage: string;

  constructor(
    private plotService: PlotsService,
    private activatedRoute: ActivatedRoute
    ) { }

  getPlot(id: number){
    this.plotService.getPlot(id)
      .subscribe(
        plot => this.plot = plot,
        error => this.errorMessage = <any>error
      )
  }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params
      .subscribe(params => this.id = parseInt(params['id'], 10));
    this.getPlot(this.id);
  }

}
