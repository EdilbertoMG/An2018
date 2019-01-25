import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
        // creamos un arreglo de tipo any que sera consumido
        equipo: any[] = [
          {
            nombre: 'Edilberto',
            especialidad: 'ANGULAR',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia consequatur praesentium amet, repudiandae laudantium dolore reiciendis blanditiis cumque harum dolores quidem debitis officiis omnis temporibus magni tempora assumenda adipisci?'
          },
          {
            nombre: 'Erling',
            especialidad: 'HTML',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia consequatur praesentium amet, repudiandae laudantium dolore reiciendis blanditiis cumque harum dolores quidem debitis officiis omnis temporibus magni tempora assumenda adipisci?'
          },
          {
            nombre: 'Wilson',
            especialidad: 'CSS',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia consequatur praesentium amet, repudiandae laudantium dolore reiciendis blanditiis cumque harum dolores quidem debitis officiis omnis temporibus magni tempora assumenda adipisci?'
          }
        ];


  constructor() {
    console.log('Funcionando servicio');
  }

  // exportamos el arreglo tipo any creando una funcion que lo retorne
  obtenerEquipo(){
    return this.equipo;
  }
}
