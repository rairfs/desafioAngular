import { Component } from '@angular/core';

@Component({
  selector: 'app-tela5',
  templateUrl: './tela5.component.html',
  styleUrls: ['./tela5.component.css']
})
export class Tela5Component {

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
