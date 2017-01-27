import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navbar/navigation.component';
import { HeaderComponent } from './welcome.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ServicesComponent } from './services.component';
import { PropiedadesComponent } from './prop/propiedades.component';
import { PropListComponent } from './prop/propiedades-list.component';
import { PropiedadFilterPipe } from './prop/propiedad-filter.pipe';
import { MainPropComponent } from './prop/main-prop.component';
import { DetailPropComponent } from './prop/detailprop.component';
import { PropViewFilterPipe } from './prop/propview-filter.pipe'

@NgModule({
  declarations: [AppComponent, 
                  NavigationComponent, 
                  HeaderComponent, 
                  AboutComponent, 
                  ContactComponent, 
                  ServicesComponent,
                  PropiedadesComponent,
                  PropListComponent,
                  PropiedadFilterPipe,
                  MainPropComponent,
                  DetailPropComponent,
                  PropViewFilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot([
    //  {path: 'contact' , component: ContactComponent},
    //  {path: 'propiedades' , component: MainPropComponent},
    //  {path: 'about' , component: AboutComponent},
    //  {path: 'welcome' , component: HeaderComponent},
    //  {path: '' , component: HeaderComponent, pathMatch:'full'},
    //  {path: '**' , component: HeaderComponent, pathMatch:'full'},
    //], {useHash: true})//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
