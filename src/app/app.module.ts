import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaSucessoComponent } from './components/tela-sucesso/tela-sucesso.component';
import { TelaConsultaComponent } from './telas/tela-consulta/tela-consulta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './telas/home/home.component';
import { Tela1Component } from './telas/tela1/tela1.component';
import { Tela3Component } from './telas/tela3/tela3.component';
import { Tela4Component } from './telas/tela4/tela4.component';
import { Tela5Component } from './telas/tela5/tela5.component';
import { Tela6Component } from './telas/tela6/tela6.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaSucessoComponent,
    TelaConsultaComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    Tela1Component,
    Tela3Component,
    Tela4Component,
    Tela5Component,
    Tela6Component
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
