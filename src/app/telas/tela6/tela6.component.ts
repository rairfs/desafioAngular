import { Component } from '@angular/core';

@Component({
  selector: 'app-tela6',
  templateUrl: './tela6.component.html',
  styleUrls: ['./tela6.component.css']
})
export class Tela6Component {

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
