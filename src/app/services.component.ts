import { Component } from '@angular/core'

@Component ({
    selector: 'services',
    template:`
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading"> {{ title }} </h2>
                    <hr class="primary">
                </div>
            </div>
			
			<div class="row">
                <div class="col-lg-4 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-check-square-o text-primary sr-icons"></i>
                        <h3>{{ servicios[0].text }}</h3>                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-television text-primary sr-icons"></i>
                        <h3>{{ servicios[1].text }}</h3>                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-wifi text-primary sr-icons"></i>
                        <h3>{{ servicios[2].text }}</h3>                        
                    </div>
                </div>
				<div class="col-lg-6 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-car text-primary sr-icons"></i>
                        <h3>{{ servicios[3].text }}</h3>                        
                    </div>
                </div>
				<div class="col-lg-6 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-fire text-primary sr-icons"></i>
                        <h3> {{ servicios[4].text }} </h3>                        
                    </div>
                </div>				
            </div>	
			
			<div class="row text-center">
				<a href="#portfolio" class="page-scroll btn btn-primary btn-xl sr-button">{{ linkPropiedades }}</a>
			</div>	
        </div>
    </section>
    `
})

export class ServicesComponent {
    title:string = "Servicios Incluidos";
    linkPropiedades:string = "Ver Propiedades";
    servicios:any[] = [
        { "text" : "Luz / Gas / Agua" },
        { "text" : "Televisión por cable" },
        { "text" : "Wifi" },
        { "text" : "Entrada de Auto" },
        { "text" : "Parrilla" },
    ];
}