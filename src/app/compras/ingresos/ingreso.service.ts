import { Subject } from "rxjs";
import { Ingreso } from "./ingreso.model";

export class IngresosService{
    private ingresosLista: Ingreso[] = [
        {ingresoId: 1, proveedor: 'Nini', usuario: 'UnUsuario', tipo_comprobante: 'Factura', 
        serie_comprobante: 'C', num_comprobante: 674, fecha_hora: '2021-02-11', impuesto: 21,
        total: 100, estado: 'Activo'},
        {ingresoId: 2, proveedor: 'Vital', usuario: 'OtroUsuario', tipo_comprobante: 'Factura', 
        serie_comprobante: 'A', num_comprobante: 5434, fecha_hora: '2021-02-12', impuesto: 42,
        total: 200, estado: 'Activo'},
        {ingresoId: 3, proveedor: 'Carrefour', usuario: 'OtroUsuario', tipo_comprobante: 'Factura', 
        serie_comprobante: 'C', num_comprobante: 32434, fecha_hora: '2021-02-12', impuesto: 210,
        total: 1000, estado: 'Activo'}

    ];

   IngresoSubject =  new Subject<Ingreso>();
    //metodo para retornar la data como una copia del array original
    obtenerIngresos(){
        return this.ingresosLista.slice();
    }

    gurardarIngreso(ingreso: Ingreso){
        this.ingresosLista.push(ingreso);
        this.IngresoSubject.next(ingreso);
    }
}