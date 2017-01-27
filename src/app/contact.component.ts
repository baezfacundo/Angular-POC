import { Component } from '@angular/core'

@Component ({
    selector: 'contact',
    template: `
    <section id="contact" class="bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">{{ title }}</h2>
                    <hr class="primary">
                    <p>{{ description }}</p>
                </div>
                <div class="col-lg-4 col-lg-offset-2 text-center">
                    <i class="fa fa-phone fa-3x sr-contact"></i>
                    <p>{{ phone }}</p>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:{{ email }}">{{ email }}</a></p>
                </div>
            </div>
        </div>
    </section>
    `
})

export class ContactComponent {
    title:string = "Contáctenos";
    description:string = "Nos pueden pueden contactar a través de los siguientes medios...";
    phone:string = "(011) 4904-2013";
    email:string = "info@teveoengesell.com.ar";
}
