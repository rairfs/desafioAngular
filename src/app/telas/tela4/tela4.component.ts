import { Component } from '@angular/core';

@Component({
  selector: 'app-tela4',
  templateUrl: './tela4.component.html',
  styleUrls: ['./tela4.component.css']
})
export class Tela4Component {

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
