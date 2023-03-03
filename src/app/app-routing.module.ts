import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './telas/tela-consulta/tela-consulta.component';
import { TelaSucessoComponent } from './telas/tela-sucesso/tela-sucesso.component';

const routes: Routes = [
  { path: 'consulta', component: TelaConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
