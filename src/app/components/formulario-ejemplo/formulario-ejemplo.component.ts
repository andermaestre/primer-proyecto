import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplo',
  templateUrl: './formulario-ejemplo.component.html',
  styleUrls: ['./formulario-ejemplo.component.css']
})
export class FormularioEjemploComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      apellido: ['']
    });
  }

  submitForm() {
    alert('Nombre: ' + this.form.value.nombre +' - Apellido: ' + this.form.value.apellido);
  }

  cambiarNombre() {
    this.form.get('nombre')?.setValue('Jesus');
  }

  limpiarFormulario() {
    this.form.reset();
  }

}
