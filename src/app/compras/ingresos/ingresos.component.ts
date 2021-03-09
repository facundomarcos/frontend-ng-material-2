import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IngresoNuevoComponent } from './ingreso-nuevo/ingreso-nuevo.component';
import { Ingreso } from './ingreso.model';
import { IngresosService } from './ingreso.service';



@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit, AfterViewInit, OnDestroy {
     //inicializa la variable que va a guardar la data que llega del service
  ingresoData: Ingreso[] = []; 
    //array de titulos para la datatable
    desplegarColumnas = ["usuario","proveedor","tipo_comprobante","serie_comprobante","num_comprobante","fecha_hora","impuesto","total","estado"];
    //que despliegue una lista de elementos de tipo articulo
  //que despliegue una lista de elementos de tipo articulo
  dataSource = new MatTableDataSource<Ingreso>();
  @ViewChild(MatSort) ordenamiento: MatSort;
  //para la paginacion
  @ViewChild(MatPaginator) paginacion: MatPaginator;

  //subscripcion al servicio
  private ingresoSubscription: Subscription;
  //inyecta el servicio en el constructor
  constructor(private ingresosService: IngresosService, private dialog: MatDialog) { }
  //filtro busqueda en tabla
    hacerFiltro(filtro: string){
      this.dataSource.filter = filtro;
    }
    //dialog para insertar ingresos
    abrirDialog(){
      //despliega un componente angular
      this.dialog.open(IngresoNuevoComponent,{
        width: '700px'
      });
    }
  
    ngOnInit(): void {
      this.dataSource.data = this.ingresosService.obtenerIngresos();
      this.ingresoSubscription = this.ingresosService.IngresoSubject
      .subscribe(() => {
        this.dataSource.data = this.ingresosService.obtenerIngresos();
      })
    }
  
    ngAfterViewInit(){
      this.dataSource.sort = this.ordenamiento;
      this.dataSource.paginator = this.paginacion;
    }
  
    ngOnDestroy(){
      this.ingresoSubscription.unsubscribe();
    }
  }



