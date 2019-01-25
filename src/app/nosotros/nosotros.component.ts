import { Component, OnInit } from '@angular/core';
// importamos el servicio donde se vaya a usar en este caso en el componente nostros
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
// importamos el servicio en el constructor por lo general los servicios tienen nombres como:
// private _servicio: (nombre de la clase)

  // creamos un arreglo donde vamos a recibir nuestro servicio
  equipo:any[] = [];

  constructor(private _servicio: EquipoService) {
    // le decimos que nuestro arreglo va ser igual a la funcion ObtenerEquipo que esta en el servicio importado
    this.equipo = _servicio.obtenerEquipo();
   }

  ngOnInit() {
  }

}
