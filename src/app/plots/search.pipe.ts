import { Pipe, PipeTransform } from '@angular/core';
import { Plot } from '../services/plot';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(value: Plot[], filter: string){
    filter = filter ? filter.toLocaleLowerCase(): null;
    return filter ? value.filter((plot: Plot) =>
    plot.location.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }
}
