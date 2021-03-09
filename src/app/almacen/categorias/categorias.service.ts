import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

//para no tener que declara en app.module.ts se declara como injectable
@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
    //conecta con la url declarada en environment
baseUrl = environment.baseUrl;
 categoriasLista: Categoria[] = [{nombre: 'Camisas', descripcion: 'Todas las camisas'}];
  //private categoriasLista: Categoria[] = [
  //        {categoriaId : 1, nombre: 'Camisas', descripcion: 'Todas las camisas'},
  //        {categoriaId : 2, nombre: 'Pantalones', descripcion: 'Todos los pantalones'},
  //        {categoriaId : 3, nombre: 'Camisas manga corta', descripcion: 'Todas las camisas de manga corta'},
  //        {categoriaId : 3, nombre: 'Remeras', descripcion: 'Todas las remeras'}
  // ];

  //observable para monitorear el async
 private categoriasSubject = new Subject<Categoria[]>();

constructor(private http: HttpClient){}

obtenerCategorias() {
    //return this.categoriasLista.slice();
    //to do verificar url categorias
    this.http.get<Categoria[]>(this.baseUrl + '/Categoria')
    .subscribe( (data) => {
        //que la variable categoriasLista se llene con la data que llega del response
        this.categoriasLista = data;
        //actualiza, sino, siempre va a estar vacio
        this.categoriasSubject.next([...this.categoriasLista]);

    });
    console.log(this.categoriasLista);
  }
  //el observable que va a tener la data
  obtenerActualListener(){
      return this.categoriasSubject.asObservable();
      
  }

}


