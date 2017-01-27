import {PipeTransform, Pipe} from '@angular/core';
import {IPropiedad} from './propiedad';

@Pipe({
    name: 'propiedadFilter'
})

export class PropiedadFilterPipe implements PipeTransform{
    transform(value: IPropiedad[], filterBy:string):IPropiedad[]{
        filterBy = filterBy ? filterBy.toLowerCase():null;
        if (filterBy === null)
        {
            return value.filter((propiedad: IPropiedad) => propiedad.main === false);    
        }
        return filterBy ?
         value.filter((propiedad: IPropiedad) => propiedad.parent !== null &&
         propiedad.description.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    };    
}