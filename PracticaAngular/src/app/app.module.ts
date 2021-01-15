import { BrowserModule } from '@angular/platform-browser'; //Importaciones
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFirstComponent } from './form-first/form-first.component';

@NgModule({ 
  declarations: [ 
    AppComponent, FormFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Setup de un componente
})
export class AppModule { }
