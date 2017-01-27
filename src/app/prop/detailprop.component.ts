import { Component, Input, OnChanges } from '@angular/core';
import { IPropiedad } from './propiedad';

@Component({
    moduleId: module.id,
    selector: 'detail-prop',
    template: `    				
		<!-- Carousel -->
		<div id="mainCarousel" class="modal fade" role="dialog">		
			<div class="modal-dialog" role="document">			
				<div class="modal-content">
				  <div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Fotos: {{ title }}</h4>
				  </div>
				  <div class="modal-body">
					
					<div id="carousel-pics-generic" class="carousel slide" data-ride="carousel">
					  <!-- Indicators -->
					  <ol class="carousel-indicators">
						<li data-target="#carousel-pics-generic" data-slide-to="0" class="active"></li>
						<li data-target="#carousel-pics-generic" data-slide-to="1"></li>
						<li data-target="#carousel-pics-generic" data-slide-to="2"></li>
						<li data-target="#carousel-pics-generic" data-slide-to="3"></li>
						<li data-target="#carousel-pics-generic" data-slide-to="4"></li>
						<li data-target="#carousel-pics-generic" data-slide-to="5"></li>
					  </ol>

					  <!-- Wrapper for slides -->
					  <div class="carousel-inner" role="listbox">
						<div class="item active">
						  <img src="img/portfolio/LaTranquera/photos/LaTranquera/1.jpg" alt="Frente">
						  <div class="carousel-caption">
							Descripcion
						  </div>
						</div>
						<div class="item">
						  <img src="img/portfolio/LaTranquera/photos/LaTranquera/2.jpg" alt="Frente">
						  <div class="carousel-caption">
							Descripcion
						  </div>
						</div>
						<div class="item">
						  <img src="img/portfolio/LaTranquera/photos/LaTranquera/3.jpg" alt="Frente">
						  <div class="carousel-caption">
							Descripcion
						  </div>
						</div>
						<div class="item">
						  <img src="img/portfolio/LaTranquera/photos/LaTranquera/4.jpg" alt="Frente">
						  <div class="carousel-caption">
							Descripcion
						  </div>
						</div>
						<div class="item">
						  <img src="img/portfolio/LaTranquera/photos/LaTranquera/5.jpg" alt="Frente">
						  <div class="carousel-caption">
							Descripcion
						  </div>
						</div>
					</div>

					  <!-- Controls -->
					  <a class="left carousel-control" href="#carousel-pics-generic" role="button" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					  </a>
					  <a class="right carousel-control" href="#carousel-pics-generic" role="button" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					  </a>
					</div>
					
					
				  </div>
				  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
			  </div>
				</div>
			</div>
		</div>
    `    
})

export class DetailPropComponent implements OnChanges{
			@Input()	propTitle:string;
			@Input()	propPics:string[];
			title:string = '';
			pics:string[] = [''];

			ngOnChanges(): void {
				console.log('onChangeDetail');
				this.title = this.propTitle;
				this.pics = this.propPics;
			}
}

