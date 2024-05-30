import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {

  titulo: string = 'Hola mundo!';
  color: string = 'blue';
  alumnos: string[] = [
    "Mikel", "Juan", "Pedro", "Jose", "Maria"
  ];
}
