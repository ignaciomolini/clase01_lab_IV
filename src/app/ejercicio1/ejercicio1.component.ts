import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  title = "Ejercicio 1";
  edadUno = 0;
  edadDos = 0;
  suma = 0;
  promedio = 0;

  constructor() { }

  calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma/2;
  }

  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }

  ngOnInit(): void {
  }

}
