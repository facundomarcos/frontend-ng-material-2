import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from './articulo.model';
import { ArticulosService } from './articulos.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ArticuloNuevoComponent } from './articulo-nuevo.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit, AfterViewInit, OnDestroy {
  //data que va a llegar
  articuloData: Articulo[] = [];
  //array de titulos para la datatable
  desplegarColumnas = ["codigo","nombre","precio_venta","descripcion","categoria","stock","imagen","estado"];
  //que despliegue una lista de elementos de tipo articulo
  dataSource = new MatTableDataSource<Articulo>();
  //para el ordenamiento
  @ViewChild(MatSort) ordenamiento: MatSort;
  //para la paginacion
  @ViewChild(MatPaginator) paginacion: MatPaginator;

  //subscripcion al servicio
  private articuloSubscription: Subscription;

  constructor(private articulosService: ArticulosService, private dialog: MatDialog) { }
//filtro busqueda en tabla
  hacerFiltro(filtro: string){
    this.dataSource.filter = filtro;
  }
  //dialog para insertar articulos
  abrirDialog(){
    //despliega un componente angular
    this.dialog.open(ArticuloNuevoComponent,{
      width: '350px'
    });
  }

  ngOnInit(): void {
    //this.articuloData = this.articulosService.obtenerArticulos();
    this.dataSource.data = this.articulosService.obtenerArticulos();
    this.articuloSubscription = this.articulosService.ArticuloSubject
    .subscribe(() => {
      this.dataSource.data = this.articulosService.obtenerArticulos();
    })
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.paginacion;
  }

  ngOnDestroy(){
    this.articuloSubscription.unsubscribe();
  }

}
