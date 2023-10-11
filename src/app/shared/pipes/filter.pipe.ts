import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], textFilter:string): Car[] {

    textFilter= textFilter? textFilter.toLocaleLowerCase():"";
    const filterText= textFilter? value.filter((c:Car)=> c.model.name.toLocaleLowerCase().indexOf(textFilter) !== -1):value;

    return filterText;
      }

}