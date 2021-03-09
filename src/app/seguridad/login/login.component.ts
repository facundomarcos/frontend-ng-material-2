import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //inyectamos la instancia global de SeguridadService
  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  loginUsuario(form: NgForm){
    //llamamos a seguridadService
    this.seguridadService.login({
      email: form.value.email,
      password: form.value.password
    });
  }


}
