import { Component, OnInit } from '@angular/core';
//Importa interfaz persona
import {Persona} from '../persona'
//Importa faker-personas
import {PERSONAS} from '../faker-personas'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {


  personas = PERSONAS; //clase, lista de heroes

  //Controlador de eventos
  selectedPersona: Persona;

  onSelect(persona: Persona): void{
    this.selectedPersona = persona
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
