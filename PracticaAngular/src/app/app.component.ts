import { Component } from '@angular/core';

@Component({//Componente, es la funcion, el cual recibe un objeto de definicon
  selector: 'app-root', //componente drive
  templateUrl: './app.component.html', //Directorio del componente html
  styleUrls: ['./app.component.css']   //Directorio del componente css
})
export class AppComponent {
  title = 'PracticaAngular';
}
