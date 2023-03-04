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
  isUserNotificationActive: boolean;

  constructor() {
    this.titulo = '';
    this.caminho = '';
    this.isUserBarActive = false;
    this.isUserNotificationActive = false;
  }

  onFocusUserOut() {
    this.isUserBarActive = false;
  }

  onFocusUserIn() {
    this.isUserBarActive = true;
  }

  onFocusNotificationsOut(){
    this.isUserNotificationActive = false;
  }

  onFocusNotificationsIn(){
    this.isUserNotificationActive = true;
  }

}
