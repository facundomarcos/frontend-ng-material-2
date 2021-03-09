import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Categoria } from '../categorias/categoria.model';
import { CategoriasService } from '../categorias/categorias.service';
import { ArticulosService } from './articulos.service';

@Component({
    selector: 'app-articulo-nuevo',
    templateUrl: 'articulo-nuevo.component.html',
    styleUrls: ['./articulo-nuevo.component.css']
})
export class ArticuloNuevoComponent implements OnInit{
    selectCategoria: string;
    selectCategoriaTexto: string;

    categorias: Categoria[] = [];

    constructor(private articulosService: ArticulosService, 
        private dialogRef: MatDialog, 
        private categoriasService: CategoriasService){
            
        }

    ngOnInit(){
       //to do , probar rompiendo la referencia haciendo un nuevo array
        this.categorias = this.categoriasService.obtenerCategorias();
    
        
    }

    selected(event: MatSelectChange){
        //captura el label de combo box
        this.selectCategoriaTexto = (event.source.selected as MatOption).viewValue;
    }


    guardarArticulo(form: NgForm){
        //valida que el form sea valido
        if(form.valid){
            this.articulosService.gurardarArticulo({ 
             
                categoria: this.selectCategoriaTexto, 
                codigo: form.value.codigo, 
                nombre: form.value.nombre, 
                precio_venta: form.value.precio_venta,
                stock: form.value.stock, 
                descripcion: form.value.descripcion, 
                imagen: form.value.imagen, 
                estado: form.value.estado 
            });
            //que cierre el dialogo
            this.dialogRef.closeAll();

        }
        
    }
}