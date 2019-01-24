import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  show:boolean = true;
  //arreglo tipo any de objetos que se inician con llaves: {}
  animales:Array<any>=[
    {tipo:'Perro',nombre:'Lisa',edad:20},
    {tipo:'Gato',nombre:'Jese',edad:4},
    {tipo:'Humano',nombre:'Edilberto',edad:22}
  ];
}
