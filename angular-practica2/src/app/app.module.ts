import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component'; //Componente Personas
import { PersonasComponent } from './personas/personas.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaDetalleComponent //Componente
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
