import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AppRoutingModule } from './app-routing.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ServersCenterComponent } from './servers-center/servers-center/servers-center.component';
import { ServersCenterHomeComponent } from './servers-center/servers-center-home/servers-center-home.component';
import {CommonModule} from '@angular/common';
import {ServerCenterModule} from './servers-center/server-center.module';
import {AdminModule} from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UsuariosModule,
    AuthModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (router: Router){

  }
}
