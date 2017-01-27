import { Component } from '@angular/core'

@Component({
    selector: 'welcome',
    template: 
    `<header>
        <div class="header-content">
            <div class="header-content-inner">
                <h1 id="homeHeading">{{title}}</h1>
                <hr>
                <p>{{description}}</p>
                <a href="#about" class="btn btn-primary btn-xl page-scroll">{{aboutLink}}</a>
            </div>
        </div>
    </header>`
})

export class HeaderComponent {
    title:string = "Te Veo en Gesell";
    description:string = "Alquiler de casas y departamentos para tus próximas vacaciones...";
    aboutLink:string = "¿Quéres saber más?";
}