import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

   //inyectamos la instancia global de SeguridadService
   constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  registrarUsuario(form: NgForm){
    console.log(form);
    //llamamos a seguridadService
    this.seguridadService.registrarUsuario({
      email: form.value.email,
      password: form.value.password,
      apellidos: form.value.apellidos,
      nombre: form.value.nombre,
      username: form.value.username,
      usuarioId: ''
    });
  }
}
