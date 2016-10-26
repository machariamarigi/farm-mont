import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Plot } from './plot';


@Injectable()
export class PlotsService {
  private plotUrl = "assets/data.json";

  constructor(
    private http: Http,
  ) {}

  getPlots(): Observable<Plot[]>{
    return this.http.get(this.plotUrl)
      .map((response: Response) => <Plot[]> response.json())
      .catch(this.handleError);
  }

getPlot(id: number): Observable<Plot>{
  return this.getPlots()
    .map((plots: Plot[]) => plots.find(l => l.id === id))
    .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        