import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './telas/tela-consulta/tela-consulta.component';
import { HomeComponent } from './telas/home/home.component';
import { Tela1Component } from './telas/tela1/tela1.component';
import { Tela3Component } from './telas/tela3/tela3.component';
import { Tela4Component } from './telas/tela4/tela4.component';
import { Tela5Component } from './telas/tela5/tela5.component';
import { Tela6Component } from './telas/tela6/tela6.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagina1', component: Tela1Component},
  { path: 'consulta', component: TelaConsultaComponent },
  { path: 'pagina3', component: Tela3Component},
  { path: 'pagina4', component: Tela4Component},
  { path: 'pagina5', component: Tela5Component},
  { path: 'pagina6', component: Tela6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
