import {Subject} from 'rxjs';
import {Usuario} from './usuario.model';
import {LoginData} from './login-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//va a permitir registrar y loguear usuarios
//Router requiere ser inyectado
@Injectable()
export class SeguridadService{
    seguridadCambio = new Subject<boolean>();
    private usuario: Usuario;

    constructor(private router: Router){

    }

    //usr es el parametro externo
    registrarUsuario(usr: Usuario){
        this.usuario = {
            email: usr.email,
            //numero autogenerado
            usuarioId: Math.round(Math.random() * 10000).toString(),
            nombre: usr.nombre,
            apellidos: usr.apellidos,
            username: usr.username,
            password: ''
        };

        //disparar evento seguridadCambio
        this.seguridadCambio.next(true);
        //cuando el registro sea exitoso reenvie al home
        this.router.navigate(['/']);
    }

    login(loginData: LoginData){
        this.usuario = {
            email: loginData.email,
            usuarioId: Math.round(Math.random() * 10000).toString(),
            nombre: '',
            apellidos: '',
            username:'',
            password:''
        };

        //disparar evento seguridadCambio
        this.seguridadCambio.next(true);
        //cuando el login sea exitoso reenvie al home
        this.router.navigate(['/']);
    }

    salirSesion(){
        this.usuario = null;
        //disparar evento seguridadCambio
        this.seguridadCambio.next(false);
        //cuando se salga de sesion,  reenvie al login
        this.router.navigate(['/login']);
    }

    //obtener usuario en sesion
    obtenerUsuario(){
        //actualizar con sprit operator 
        return {...this.usuario};
    }

    //validacion del login
    onSesion(){
        return this.usuario != null;
    }
}
