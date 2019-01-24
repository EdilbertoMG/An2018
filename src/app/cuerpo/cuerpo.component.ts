import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  show:boolean = true;
  //arreglo tipo any de objetos que se inician con llaves: {}
  animales:Array<any>=[
    {tipo:'Perro',nombre:'Lisa',edad:20},
    {tipo:'Gato',nombre:'Jese',edad:4},
    {tipo:'Humano',nombre:'Edilberto',edad:22}
  ];
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
