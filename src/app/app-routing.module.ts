import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './telas/tela-consulta/tela-consulta.component';

const routes: Routes = [
  { path: '', component: TelaConsultaComponent },
  { path: 'consulta', component: TelaConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
