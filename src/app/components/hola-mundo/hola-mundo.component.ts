import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {

  titulo: string;
  color: string;
  alumnos: string[];
  
  constructor() { 
    this.titulo = 'Primera seccion de prueba';
    this.color = 'lightblue';
    this.alumnos = ["Mikel", "Juan", "Pedro", "Jose", "Maria"]
  }
}
