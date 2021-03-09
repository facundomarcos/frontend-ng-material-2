import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ProveedoresService } from './proveedores.service';



@Component({
    selector: 'app-proveedor-nuevo',
    templateUrl: 'proveedor-nuevo.component.html',
    styleUrls: ['./proveedor-nuevo.component.css']
})
export class ProveedorNuevoComponent implements OnInit{
    //variable para llenar el select
    selectTipo_documento: string;
    //variable para guardar el selected
    selectedTipo_documentoTexto: string;

    tipo_documento: string[] = [];

    constructor(private proveedoresService: ProveedoresService, 
        private dialogRef: MatDialog){}

    ngOnInit(){
        //cargar el combobox
        this.tipo_documento = this.proveedoresService.obtenerTipo_documento();
    }

    selected(event: MatSelectChange){
       // captura el label de combo box
      this.selectedTipo_documentoTexto = (event.source.selected as MatOption).viewValue;
    }


    guardarProveedor(form: NgForm){
        //valida que el form sea valido
        if(form.valid){
            this.proveedoresService.gurardarProveedor({ 
                personaId: 1, 
                tipo_persona: 'Proveedor',
                tipo_documento:  this.selectedTipo_documentoTexto, 
                razon_social: form.value.razon_social, 
                num_documento: form.value.num_documento, 
                direccion: form.value.direccion,
                telefono: form.value.telefono, 
                email: form.value.email, 
                contacto: form.value.contacto, 
                estado: 'Activo'
            });
            //que cierre el dialogo
            this.dialogRef.closeAll();

        }
        
    }
}