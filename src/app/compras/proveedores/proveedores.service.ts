import { Subject } from 'rxjs';
//import { Persona } from 'src/app/Personas/persona.model';
import { Proveedor } from './proveedor.model';


export class ProveedoresService{
    //lista de personas
    private proveedoresLista: Proveedor[] = [
        { personaId: 1, tipo_persona: 'Proveedor', razon_social: 'Nini', tipo_documento: 'CUIT', num_documento: '22233322', direccion: 'calle tal 1234', telefono: '221-3453453', email: 'facundo@algo.com', contacto: 'Facundo', estado: 'Activo'  },
        { personaId: 2, tipo_persona: 'Proveedor', razon_social: 'Vital', tipo_documento: 'CUIT', num_documento: '22233333', direccion: 'calle 44 nro 44', telefono: '3453453', email: 'emilia@algo.com', contacto: 'Maria', estado: 'Activo'  },
        { personaId: 3, tipo_persona: 'Proveedor', razon_social: 'Carrefour', tipo_documento: 'CUIT', num_documento: '22233344', direccion: 'av. algo 444', telefono: '3453453', email: 'florencia@algo.com', contacto: 'Florencia',estado: 'Activo'  }

    ];
    //lista de tipo de documentos
    private tipo_documentoLista: string[] = ['DNI','CUIT','CUIL'];

    ProveedorSubject =  new Subject<Proveedor>();
    obtenerProveedores(){
        return this.proveedoresLista.slice();
    }

    obtenerTipo_documento(){
        return this.tipo_documentoLista.slice();
    }
    
    gurardarProveedor(proveedor: Proveedor){
        this.proveedoresLista.push(proveedor);
        this.ProveedorSubject.next(proveedor);
    }
}