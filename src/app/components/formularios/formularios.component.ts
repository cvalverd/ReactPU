import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent {

miFormulario!:FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.miFormulario = this.fb.group({
    nombre: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
  })
}

submitForm(){
  if (this.miFormulario.valid){


    console.log("Resultado: " + this.miFormulario.get('nombre')!.value);
  }
}


}
