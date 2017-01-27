import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PropiedadService } from './propiedad.services';
import { IPropiedad } from './propiedad'

@Component ({
    selector: 'prop-list',
    moduleId: module.id,
    template: `
            <div class="container">
                <div class='panel panel-primary'>
                    <div class='panel-heading'>
                        {{ title }}
                    </div>

                    <!-- Filter the Products   -->
                    <div class='panel-body'>
                        <div class='row'>
                            <div class='col-md-4 col-lg-4'>
                                {{ find }} <input type='text' class='text-left' [(ngModel)]='listfilter' />
                            </div>                            
                        </div>  
                    </div>
                </div>

                <div class='table-responsive'>
                <table class='table'>
                    <thead>
                        <tr>                        
                            <th>{{ imgTitle }}</th>
                            <th>{{ nombreTitle }}</th>
                            <th>{{ descriptionTitle }}</th>
                            <th>{{ addressTitle }}</th>
                            <th> </th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor='let propiedad of propiedades | propiedadFilter:listfilter'>
                            <td><img [src]='propiedad.imageUrl' [alt]='propiedad.title' class='img-rounded' [style.width.px]='imageWidth' [style.margin.px] = 'imageMargin'/></td>
                            <td>{{ propiedad.title }}</td>
                            <td>{{ propiedad.description }}</td>
                            <td>{{ propiedad.address }}</td>
                            <td><button type='button'class='btn btn-primary btn-sm active' role="button" (click)='onClick(propiedad)'
                                    data-toggle="modal" data-target="#mainCarousel" style="cursor: pointer;">{{ btnFotosText }}
                                </button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
})

export class PropListComponent implements OnInit{
    title:string = 'Listado de Propiedades';
    find:string = 'Buscar por:';
    imgTitle:string = 'Imagen';
    nombreTitle:string = 'Nombre';
    descriptionTitle:string = 'Descripción';
    addressTitle:string = 'Dirección';
    propiedades:IPropiedad[];
    imageWidth:number = 100;
    imageMargin:number = 2;
    btnFotosText:string = 'Ver Fotos';
    listfilter:string;    

    @Output() showPicsClicked: EventEmitter<IPropiedad> = new EventEmitter<IPropiedad>();

    constructor (private _propService:PropiedadService ){

    }

    ngOnInit():void{
        this.propiedades = this._propService.gerPropiedades();
    }

    onClick(propiedad):void{
        this.showPicsClicked.emit(propiedad);
    }
}