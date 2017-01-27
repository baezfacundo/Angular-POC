import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  moduleId: module.id,
  templateUrl: 'navigation.component.html'  
})

export class NavigationComponent {
  title = 'Toggle navigation'; 
  menu = 'Menu';
  mainLink = 'Principal';
  aboutLink = 'Nosotros';
  servicesLink = 'Servicios';
  portfolioLink = 'Propiedades';
  contactLink = 'Contáctenos';
}
