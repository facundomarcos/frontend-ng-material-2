import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SeguridadService } from "./seguridad.service";

//maneja el ruteo 
@Injectable()
export class SeguridadRouter implements CanActivate{
    constructor(private seguridadService: SeguridadService, private router: Router){

    }
    //este metodo devuelve un boolean para mostrar u ocultar un componente grafico
    //depende del estado del usuario
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.seguridadService.onSesion()){
            return true;
        }else{
            this.router.navigate(['/login']);
        }
       
    }
}