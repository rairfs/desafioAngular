import { Component } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent {

  notificacoes: string[];

  constructor() {
    this.notificacoes = ['Notificação 1', 'Notificação 2', 'Notificação 3', 'Notificação 4'];
  }

}
