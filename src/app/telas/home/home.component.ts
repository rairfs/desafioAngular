import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHovered: boolean;

  constructor () {
    this.isHovered = false;
  }

  onMouseEnter(){
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

}
