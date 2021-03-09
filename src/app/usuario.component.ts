import {Component} from '@angular/core';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'
})

export class UsuarioComponent{
    usuarios = ['Florencia', 'Emilia', 'Vanesa'];
    usuarioNombre = 'Facundo Marcos';
}