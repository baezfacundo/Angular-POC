import { Component } from '@angular/core';
import { PropiedadService } from './prop/propiedad.services';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PropiedadService]
})

export class AppComponent {  
  title = 'testing a new angular cli app!';
  visible= false;
  username = '';
  decirAdios()
  {
    this.visible = false
  }
}
