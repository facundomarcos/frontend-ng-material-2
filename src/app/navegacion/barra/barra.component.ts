import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../seguridad/seguridad.service';



@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {
  //un componente superior usa el output para acceder al onMenuToggleDispatch y disparar un evento
  @Output() menuToggle = new EventEmitter<void>();
  //estadoUsuario se va a usar en el html con ngIf para mostrar u ocultar componentes
  estadoUsuario: boolean;
  usuarioSubscription: Subscription;

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    //el status representa el estado del usuario
    //va a guardar el estado en la variable estadoUsuario
    this.usuarioSubscription = this.seguridadServicio.seguridadCambio.subscribe( status => {
      this.estadoUsuario = status;
    })
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }
//cancela la subscripcion cuando se dispare ondestroy
  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe();
  }

  terminarSesion(){
    this.seguridadServicio.salirSesion();
  }

}
