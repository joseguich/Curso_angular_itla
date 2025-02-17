import { Component } from '@angular/core';
import { listUser } from '../../interfaces/list-name';

@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent {
  public listUser: listUser[] = [
    {
      nombre: 'José Elpidio',
      edad: 25,
      activo: true,
    },
    {
      nombre: 'Moises Gomez',
      edad: 23,
      activo: true,
    },
    {
      nombre: 'Ambiorix de la Rosa',
      edad: 23,
      activo: true,
    },
    {
      nombre: 'Yulenny Silvetres',
      edad: 28,
      activo: false,
    },
    {
      nombre: 'Celia Silvetres',
      edad: 30,
      activo: false,
    },
  ];
}

/*

Ejercicio 4: Tablas dinámicas con @for y directivas combinadas
Objetivo: Crear una tabla dinámica para visualizar una lista de
usuarios.

Define en el componente una lista de usuarios, donde cada
usuario sea un objeto con propiedades: { nombre: string, edad:
number, activo: boolean }.

Usa @for para iterar y mostrar cada usuario en una fila de una tabla.
Agrega una columna extra que muestre "Activo" o "Inactivo" según el
valor de la propiedad activo, usando @if.

*/
