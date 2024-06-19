import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


/**
 * @description 
 * Componente de encabezado de la aplicacion
 * 
 * Este componente muestra el encabezado con el logotipo y el menu de navegacion
 */
/**
 * @usageNotes
 * 
 * 1. Importa este modulo en tu aplicacion principal
 * 2. Añade el selector 'app-encabezado' en tu plantilla para mostrar el encabezado
 * 3- Añade el selector 'app-pie-pagina' para mostrar el pie de pagina 
 * 
 */
@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pruebas-unitarias.component.html',
  styleUrl: './pruebas-unitarias.component.scss'
})
export class PruebasUnitariasComponent {

  miFormulario!: FormGroup;
  resultado!: number;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      numero1: ['',Validators.required],
      numero2: ['', Validators.required],
    });
  }

sumarDesdeFormulario(): void {
  const { numero1, numero2 } = this.miFormulario.value;
  this.sumar(numero1, numero2);
}

/**
 * 
 * @param {number} a - El primer numero
 * @param {number} b - El segundo numero
 * @returns {number} La suma de los dos numeros
 */


sumar(a: number, b: number): void {
  this.resultado = a + b;
}

}
