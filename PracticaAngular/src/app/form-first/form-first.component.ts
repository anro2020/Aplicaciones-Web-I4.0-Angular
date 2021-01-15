import { Component } from '@angular/core'; //Importaciones
import {Persona} from 'src/app/persona';

@Component({
  selector: 'app-form-first', //Selector, para utiliza un componente en el html
  templateUrl: './form-first.component.html', //templateUrl, es nueestro codigo html
  styleUrls: ['./form-first.component.css'] //Estiños con css
})

export class FormFirstComponent {
  titulo = "Usuarios";
  usuarios = [
    new Persona("Andres", "Rodriguez", "M", 20),
    new Persona("Luke", "Skywalker", "M", 20),
    new Persona("Leia", "Organa", "F", 26),
  ];
}
