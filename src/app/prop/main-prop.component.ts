import {Component, OnInit} from '@angular/core';
import { DetailPropComponent } from './detailprop.component';
import { IPropiedad } from './propiedad';

@Component({
    moduleId: module.id,
    selector: 'main-prop',
    template: `
    <section id="portfolio">
    <div class="container">
        <div class="row">
        <div class='col-lg-12 col-md-6 text-right'>
            <div class="btn-group btn-group-lg text-right" role="group">
                <button type="button" class="btn btn-default btn-lg" (click)='ToggleView()'>
                    <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                </button>

                <button type="button" class="btn btn-default btn-lg" (click)='ToggleView()'>
                    <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                </button>
            </div>          
            <br>
            <propiedades [hidden]='propView'></propiedades>
            <prop-list [hidden]='propList' (showPicsClicked)='onShowPicsClicked($event)'></prop-list>

            <div class="col-lg-12 col-md-12 text-center">
				<div class="well">
						<a class="fa fa-2x fa-map-marker text-primary sr-icons" data-toggle="modal" data-target="#mainModal" style="cursor: pointer;"> 
						<small>{{ ubicacionText }}</small></a>
				</div>
			</div>            
        </div>
        </div>

        <!-- Modal -->
		<div id="mainModal" class="modal fade" role="dialog">		
			<div class="modal-dialog" role="document">			
				<div class="modal-content">
				  <div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">{{ubicacionModal}}</h4>
				  </div>
				  <div class="modal-body">
					<div class="row">
								<div class="text-center">
									<!--<iframe frameborder="0" marginwidth="0" marginheight="0" style="margin:0;width:500px;height:350px;" src="./Map.htm" scrolling="no"></iframe>-->
								</div>
					</div>
					<div class="row">
								<div class="col-lg-6 col-md-6 text-right">
									<i class="fa fa-2x fa-map-marker text-primary sr-icons"></i>								
								</div>
								<div class="col-lg-6 col-md-6 text-left">
									<h6>Nuestras propiedades. <small> Puede hacerle click para ver dirección exacta. </small></h6>
								</div>
					</div>
					<div class="row">
								<div class="col-lg-6 col-md-6 text-right">
									<img src="img/calle.gif" class="img-round" alt="Líneas Verdes" />								
								</div>
								<div class="col-lg-6 col-md-6 text-left">
									<h6> Centro de Villa Gesell.<small> Estas calles se hacen peatonal a partir de las 20hs en temporada. </small></h6>
								</div>
					</div>
				  </div>
				  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
			  </div>
				</div>
			</div>
		</div>

		<detail-prop [propTitle]='propTitle' [propPics]='propPics'></detail-prop> 

    </div>
    </section>
    `
})

export class MainPropComponent implements OnInit {
    propView:boolean;
    propList:boolean;
    ubicacionText:string="Ver Ubicación"; 
    ubicacionModal:string="Ubicación";
    propTitle:string = '';
	propPics:string[] = [''];

    ToggleView():void{
        console.log('ToggleView Clicked');
        this.propList = !this.propList;
        this.propView = !this.propView;
    }

    ngOnInit(){
        this.propList=true;
        this.propView=false;
    }

	onShowPicsClicked(prop:IPropiedad): void {
		console.log('onShowPicsClicked:' + prop.title);
		console.log('pics: ' + prop.imagesUrl);
		
		this.propTitle = prop.title;
		this.propPics = prop.imagesUrl;		
	}
}