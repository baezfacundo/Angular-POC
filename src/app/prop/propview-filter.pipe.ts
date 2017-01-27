import {PipeTransform, Pipe} from '@angular/core';
import {IPropiedad} from './propiedad';

@Pipe({
    name: 'propviewfilter'
})

export class PropViewFilterPipe implements PipeTransform{
    transform(value: IPropiedad[], filterBy:number):IPropiedad[]{
        filterBy = filterBy ? filterBy:null;
        return filterBy ?
         value.filter((propiedad: IPropiedad) => propiedad.parent !== null &&
         propiedad.parent === filterBy) : value;
    };    
}