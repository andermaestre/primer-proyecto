import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {

  titulo: string;
  color1: string;
  color2: string;
  alumnos: string[];
  
  constructor() { 
    this.titulo = 'Primera seccion de prueba';
    this.color1 = 'red';
    this.color2 = 'green';
    this.alumnos = ["Mikel", "Juan", "Pedro", "Jose", "Maria"]
  }

  Cambiar(){
    if(this.color1 =='red'){
      this.color1 = 'green';
      this.color2 ='red';
    }else{
      this.color1 ='red';
      this.color2 = 'green';
    }
  }
}
