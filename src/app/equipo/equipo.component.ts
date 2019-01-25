import { Component, OnInit } from '@angular/core';
//para que angular lea nuestra ruta tenemos que importar ActivatedRoute
import { ActivatedRoute } from '@angular/router';

// importamos el servicio donde se vaya a usar en este caso en el componente equipo
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

    //creamos un arreglo de tipo any que se llenara con lo que traiga nuestro servicio
    equipo:any[]=[];

  constructor(
    // incluimos la importacion a nuestro constructor que se llamara ruta y asi poder acceder a sus funciones etc
    private ruta:ActivatedRoute,
    // importamos al constructor el servicio para poder usarlo
    private _servicio:EquipoService
  ) { 
    // llamamos a ruta y usamos la funcionalidad params que es para leer la ruta y reescribimos
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);

    // decimos que nuestro arreglo equipo sera igual a lo que obtengamos de servicio pero solo de un objeto con el id
    this.equipo = this._servicio.obtenerUno(params['id']);  
    })
  }

  ngOnInit() {
  }

}
