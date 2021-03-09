import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './almacen/articulos/articulos.component';
import { CategoriasComponent } from './almacen/categorias/categorias.component';
import { IngresosComponent } from './compras/ingresos/ingresos.component';
import { ProveedoresComponent } from './compras/proveedores/proveedores.component';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { SeguridadRouter } from './seguridad/seguridad.router';

const routes: Routes = [
  {path: '', component: InicioComponent, canActivate: [SeguridadRouter]},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'ingresos', component: IngresosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadRouter]
})
export class AppRoutingModule { }
