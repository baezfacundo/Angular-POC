import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: `
    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">{{ title }}</h2>
                    <hr class="light">
                    <p class="text-faded">{{ description }}</p>
                    <br>
                    <a href="#services" class="page-scroll btn btn-default btn-xl sr-button"> {{ servicesLink }}</a>
                    <br>
                </div>
            </div>
        </div>
    </section>
    `
})

export class AboutComponent {
    title:string = "¿Quiénes somos?";
    description:string = "Somos una familia que alquila sus propiedades desde hace más de 25 años. La mayoría de nuestros inquilinos se repiten año tras año, generando un vínculo de confianza y amistad que se va acrecentando gracias a sus recomendaciones por el boca en boca.Nuestro objetivo es que pasen unas agradables vacaciones y que nos vuelvan a tener en cuenta para los proximos años. Para eso manetenemos precios accesibles, y estamos dispuestos a solucionar cualquier inconveniente que este a nuestro alcance durante su estadia.Alquilamos en temporada (diciembre-enero-febrero-marzo) como asi también fines de semana largos y semana santa. Cualquier consulta que nos quieran realizar, no duden en hacerlo.¡Los esperamos !";
    servicesLink:string = "Servicios";
}