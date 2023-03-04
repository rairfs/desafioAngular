import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() titulo: string;
  @Input() caminho: string;

  constructor() {
    this.titulo = '';
    this.caminho = '';
  }

}
