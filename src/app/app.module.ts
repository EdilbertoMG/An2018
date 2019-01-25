// importamos las rutas
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// servicios
import { EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

// luego creamos la costante de las rutas dinamicas ponemos el nombre de la ruta y el componente que va a usar
const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component: CuerpoComponent, pathMatch: 'full' },
  // cuando la ruta no exista redirige a inicio en todos los casos
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    ContactoComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // importamos las rutas
    RouterModule.forRoot(routes)
  ],
  providers: [
    // agregamos el servicio en providers
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
