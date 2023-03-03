import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaSucessoComponent } from './telas/tela-sucesso/tela-sucesso.component';
import { TelaConsultaComponent } from './telas/tela-consulta/tela-consulta.component';
import { TelaBaseComponent } from './telas/tela-base/tela-base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TelaSucessoComponent,
    TelaConsultaComponent,
    TelaBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
