import { Subject } from 'rxjs';
import {Articulo} from './articulo.model';

export class ArticulosService{
    private articulosLista: Articulo[] = [
        {  categoria: 'Camisas', codigo: '3fj4298h', nombre: 'Camisa Hawaiana', precio_venta: 500, stock: 3, descripcion: 'roja con palmeras', imagen: '', estado: 'Activo'  },
        { categoria: 'Pantalones', codigo: '9ay9as6fd', nombre: 'Pantalon Jean Lee', precio_venta: 1000, stock: 5, descripcion: 'pantalon de jean', imagen: '', estado: 'Activo'  },
        {  categoria: 'Camisas', codigo: 'ad090afj', nombre: 'Camisa Blanca', precio_venta: 800, stock: 10, descripcion: 'camisa blanca marca Tiza', imagen: '', estado: 'Activo'  }

    ];

    ArticuloSubject =  new Subject<Articulo>();
    obtenerArticulos(){
        return this.articulosLista.slice();
    }

    gurardarArticulo(articulo: Articulo){
        this.articulosLista.push(articulo);
        this.ArticuloSubject.next(articulo);
    }
}