import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
//para sincronizar los inputs con el componente angular
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { InicioComponent } from './inicio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListaComponent } from './navegacion/menu-lista/menu-lista.component';
import { SeguridadService } from './seguridad/seguridad.service';

import { HttpClientModule } from '@angular/common/http';
import { ArticulosComponent } from './almacen/articulos/articulos.component';
import { ArticulosService } from './almacen/articulos/articulos.service';
import { ArticuloNuevoComponent } from './almacen/articulos/articulo-nuevo.component';
import { CategoriasComponent } from './almacen/categorias/categorias.component';

import { ProveedoresService } from './compras/proveedores/proveedores.service';
import { ProveedoresComponent } from './compras/proveedores/proveedores.component';
import { ProveedorNuevoComponent } from './compras/proveedores/proveedor-nuevo.component';
import { IngresosComponent } from './compras/ingresos/ingresos.component';
import { IngresosService } from './compras/ingresos/ingreso.service';
import { IngresoNuevoComponent } from './compras/ingresos/ingreso-nuevo/ingreso-nuevo.component';

//import {} from '';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarComponent,
    InicioComponent,
    LoginComponent,
    BarraComponent,
    MenuListaComponent,
    ArticulosComponent,
    ArticuloNuevoComponent,
    CategoriasComponent,
    ProveedoresComponent,
    ProveedorNuevoComponent,
    IngresosComponent,
    IngresoNuevoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [SeguridadService, ArticulosService, ProveedoresService, IngresosService],
  bootstrap: [AppComponent],
  //se va generar por accion de otro componente de angular
  entryComponents: [ArticuloNuevoComponent, ProveedorNuevoComponent]
})
export class AppModule { }
