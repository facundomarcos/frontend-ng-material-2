

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/Personas/persona.model';
import { ProveedoresService } from './proveedores.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProveedorNuevoComponent } from './proveedor-nuevo.component';



@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit, AfterViewInit, OnDestroy {
  //data que va a llegar
  proveedorData: Persona[] = [];
  //array de titulos para la datatable
  desplegarColumnas = ["personaId","razon_social","tipo_documento","num_documento","direccion","telefono","email","contacto"];
  //que despliegue una lista de elementos de tipo persona
  dataSource = new MatTableDataSource<Persona>();
  //para el ordenamiento
  @ViewChild(MatSort) ordenamiento: MatSort;
  //para la paginacion
  @ViewChild(MatPaginator) paginacion: MatPaginator;

  //subscripcion al servicio
  private proveedorSubscription: Subscription;

  constructor(private proveedoresService: ProveedoresService, private dialog: MatDialog) { }
//filtro busqueda en tabla
  hacerFiltro(filtro: string){
    this.dataSource.filter = filtro;
  }
  //dialog para insertar articulos
  abrirDialog(){
    //despliega un componente angular
    this.dialog.open(ProveedorNuevoComponent,{
      width: '350px'
    });
  }

  ngOnInit(): void {
    this.dataSource.data = this.proveedoresService.obtenerProveedores();
    this.proveedorSubscription = this.proveedoresService.ProveedorSubject
    .subscribe(() => {
      this.dataSource.data = this.proveedoresService.obtenerProveedores();
    })
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.paginacion;
  }

  ngOnDestroy(){
    this.proveedorSubscription.unsubscribe();
  }

}
