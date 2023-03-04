import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() titulo: string;
  @Input() caminho: string;

  isUserBarActive: boolean;

  constructor() {
    this.titulo = '';
    this.caminho = '';
    this.isUserBarActive = false;
  }

  onFocusOut() {
    this.isUserBarActive = false;
  }

  onFocusIn() {
    this.isUserBarActive = !this.isUserBarActive;
  }

}
