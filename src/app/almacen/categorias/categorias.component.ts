import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from './categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  //array de titulos para la datatable
  desplegarColumnas = ["nombre","descripcion"];
    //que despliegue una lista de elementos de tipo articulo
    dataSource = new MatTableDataSource<Categoria>();

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias();
    this.categoriasService.obtenerActualListener()
    .subscribe( (categorias: Categoria[]) =>{
        this.dataSource.data = categorias;
    });
    //this.dataSource.data = this.categoriasService.obtenerCategorias();
  }

}
