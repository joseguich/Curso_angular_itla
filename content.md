Ejercicio 1: Mostrar Mensaje
Crea un componente MessageComponent que reciba mediante @Input() un mensaje y lo
muestre en un párrafo.


Ejemplo de uso en el componente padre:
<app-message [text]="'Hola, bienvenido a Angular!'">`</app-message>`



Ejercicio 2: Cambiar Color de Fondo
Crea un componente ColorBoxComponent que reciba mediante @Input() un color y lo
aplique como fondo de un cuadro (div).


Ejemplo de uso en el componente padre:
<app-color-box [color]="'lightblue'">`</app-color-box>`


Ejercicio 3: Botón de Alerta
Crea un componente AlertButtonComponent con un botón que, al hacer clic, emita un
mensaje de alerta (@Output()) al componente padre.


Ejemplo de uso en el componente padre:
<app-alert-button (alert)="showAlert($event)">`</app-alert-button>`
En el componente padre:
showAlert(message: string) {
 alert(message);
}


Ejercicio 4: Contador
Crea un componente CounterComponent con dos botones: Incrementar y Decrementar.
Cada uno debe emitir el valor actual del contador al componente padre mediante
@Output().


Ejemplo de uso en el componente padre:
<app-counter (countChanged)="updateCount($event)">`</app-counter>`
En el componente padre:
updateCount(count: number) {
 console.log('Nuevo valor del contador:', count);
}


Ejercicio 5: Convertir a Mayúsculas
Crea un pipe llamado uppercase que transforme cualquier texto recibido a mayúsculas.
Ejemplo de uso:

<p>{{ 'hola mundo' | uppercase }}</p>
Salida esperada:
HOLA MUNDO
Ejercicio 6: Mostrar Solo la Primera Palabra
Crea un pipe llamado firstWord que reciba un texto y devuelva solo la primera palabra.
Ejemplo de uso:
<p>{{ 'Angular es increíble' | firstWord }}</p>
Salida esperada:
Angular
Ejercicio 7: Invertir Texto
Crea un pipe llamado reverseText que invierta el texto recibido.
Ejemplo de uso:
<p>{{ 'Angular' | reverseText }}</p>
Salida esperada:
ralugnA
