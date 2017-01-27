import { Component, OnInit } from '@angular/core'
import { IPropiedad } from './propiedad'
import { PropiedadService } from './propiedad.services'

@Component ({
    selector: 'propiedades',
    moduleId: module.id,
    templateUrl: 'propiedades.component.html'
})

export class PropiedadesComponent implements OnInit {

    title:string = 'Propiedades';
    messageImg:string="Haga click para ver más.";    
    propiedades:IPropiedad[];
    txtFotos:string = 'Ver Fotos';
    detailPropView:boolean = true;
    viewFilter:number;

    constructor(private _propService:PropiedadService){

    }   
    
    showDetail(propiedad): void {
        if(this.viewFilter === propiedad.id){
            this.detailPropView = !this.detailPropView;
        } else {
            this.detailPropView = false;
            this.viewFilter = propiedad.id;    
        }
    };

    ngOnInit():void{
        console.log('*/calling the prop services/*');
        this.propiedades = this._propService.gerPropiedades();
    }
}